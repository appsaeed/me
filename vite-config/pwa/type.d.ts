interface ShareTargetFiles {
  name: string;
  accept: string | string[];
}

type LaunchHandlerClientMode =
  | "auto"
  | "focus-existing"
  | "navigate-existing"
  | "navigate-new";

export interface ManifestOptions {
  /**
   * @default _npm_package_name_
   */
  name: string;
  /**
   * @default _npm_package_name_
   */
  short_name: string;
  /**
   * @default _npm_package_description_
   */
  description: string;
  /**
   *
   */
  icons: Array<{
    src: string;
    sizes: string;
    type:
      | "image/jpeg"
      | "image/png"
      | "image/gif"
      | "image/bmp"
      | "image/webp"
      | "image/svg+xml"
      | "image/x-icon"
      | "image/tiff"
      | "image/heif"
      | "image/jp2";
    purpose?: "maskable any" | '"maskable' | "any";
  }>;
  /**
   *
   */
  file_handlers?: Record<string, any>[];
  /**
   * @default `routerBase + '?standalone=true'`
   */
  start_url: string;
  /**
   * Restricts what web pages can be viewed while the manifest is applied
   */
  scope: string;
  /**
   * A string that represents the identity for the application
   */
  id?: string;
  /**
   * Defines the default orientation for all the website's top-level
   */
  orientation?:
    | "any"
    | "natural"
    | "landscape"
    | "landscape-primary"
    | "landscape-secondary"
    | "portrait"
    | "portrait-primary"
    | "portrait-secondary";
  /**
   * @default `standalone`
   */
  display: "fullscreen" | "standalone" | "minimal-ui" | "browser";
  /**
   * @default []
   */
  display_override?: string[];
  /**
   * @default `#ffffff`
   */
  background_color?: string;
  /**
   * @default '#42b883
   */
  theme_color?: string;
  /**
   * @default `ltr`
   */
  dir?: "ltr" | "rtl";
  /**
   * @default `en`
   */
  lang?: string;
  /**
   * @default A combination of `routerBase` and `options.build.publicPath`
   */
  publicPath?: string;
  /**
   * @default []
   */
  related_applications?: {
    platform: string;
    url: string;
    id?: string;
  }[];
  /**
   * @default false
   */
  prefer_related_applications?: boolean;
  /**
   * @default []
   */
  protocol_handlers?: {
    protocol: string;
    url: string;
  }[];
  /**
   * @default []
   */
  shortcuts?: {
    name: string;
    short_name?: string;
    url: string;
    description?: string;
    icons?: Record<string, any>[];
  }[];
  /**
   * @default []
   */
  screenshots?: {
    src: string;
    sizes: string;
    label?: string;
    platform?:
      | "narrow"
      | "wide"
      | "android"
      | "ios"
      | "kaios"
      | "macos"
      | "windows"
      | "windows10x"
      | "chrome_web_store"
      | "play"
      | "itunes"
      | "microsoft-inbox"
      | "microsoft-store"
      | string;
    type?: string;
  }[];
  /**
   * @default []
   */
  categories?: string[];
  /**
   * @default ''
   */
  iarc_rating_id?: string;
  share_target?: {
    action: string;
    method?: string;
    enctype?: string;
    params: {
      title?: string;
      text?: string;
      url?: string;
      files?: ShareTargetFiles | ShareTargetFiles[];
    };
  };
  /**
   * https://github.com/WICG/pwa-url-handler/blob/main/handle_links/explainer.md#handle_links-manifest-member
   */
  handle_links?: "auto" | "preferred" | "not-preferred";
  /**
   * https://developer.mozilla.org/en-US/docs/Web/Manifest/launch_handler#launch_handler_item_values
   */
  launch_handler?: {
    client_mode: LaunchHandlerClientMode | LaunchHandlerClientMode[];
  };
  /**
   * https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/sidebar#enable-sidebar-support-in-your-pwa
   */
  edge_side_panel?: {
    preferred_width?: number;
  };
}
