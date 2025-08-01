declare module '@/assets/assets' {
    type AssetGroup = Record<string, string>;
    interface Assets {
        bg: AssetGroup;
        icon: AssetGroup;
        [key: string]: AssetGroup;
    }
    export const assets: Assets;
}
