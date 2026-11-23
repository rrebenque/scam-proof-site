import data from '../data/videos.json';

export interface Vid { short?: string; long?: string }

// A guide's videos: IDs in the guide's own frontmatter (added by hand), plus any
// scheduled video in src/data/videos.json that the daily check has marked live.
export function videosFor(guide: { id: string; data: { videoId?: string; longVideoId?: string } }): Vid {
  const live = data.videos.filter((v) => v.guide === guide.id && v.live);
  return {
    short: guide.data.videoId ?? live.find((v) => v.kind === 'short')?.id,
    long: guide.data.longVideoId ?? live.find((v) => v.kind === 'long')?.id,
  };
}

// True when the guide's only YouTube video is (or will be) a long-form, with no Short.
export function longOnly(guide: { id: string; data: { videoId?: string; longVideoId?: string } }): boolean {
  const planned = data.videos.filter((v) => v.guide === guide.id);
  const hasShort = !!guide.data.videoId || planned.some((v) => v.kind === 'short');
  const hasLong = !!guide.data.longVideoId || planned.some((v) => v.kind === 'long');
  return hasLong && !hasShort;
}
