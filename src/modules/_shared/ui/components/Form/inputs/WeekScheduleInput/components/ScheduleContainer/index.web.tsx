import { Box } from '@main-components/Base/Box';

export default function ScheduleContainer({ children }) {
    return <Box
            style={{
                display: 'grid',
                gap: '1em',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
            }}
    >
        {children}
    </Box>;
}