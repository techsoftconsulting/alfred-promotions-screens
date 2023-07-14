const SizingUtils = {
    scale(size: number) {
        return size * 6; // RNSMScale(size);
    },
    vscale(size: number) {
        return size * 6.3; // RNVSMScale(size);
    },
    mscale(size: number) {
        return size * 3.5; // moderateScale(size);
    }
};

export default SizingUtils;
