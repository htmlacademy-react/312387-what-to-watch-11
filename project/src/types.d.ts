interface Element {
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
}
