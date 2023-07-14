import * as Network from 'expo-network';

const NetworkUtils = {
    async isConnected() {
        const { isInternetReachable, isConnected } =
            await Network.getNetworkStateAsync();

        return isConnected && isInternetReachable;
    }
};

export default NetworkUtils;
