import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppTheme, { Theme, useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import styled from 'styled-components';
import Text from '@main-components/Typography/Text/Text.web';
import { Badge, Box } from '@main-components/Base';

function a11yProps(index, id) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

export interface TabBarProps {
    tabs: TabProps[];
    id: string;
    onChange: any;
    selected: number;
    tabIndicatorColor?: keyof Theme['colors'];
}

interface TabProps {
    id: string;
    title: string;
    featured?: any;
}

const CustomTabs = styled(Tabs)`
  font-family: ${AppTheme.textVariants.body.fontFamily};

  & .MuiTabs-indicator {
    background-color: ${(props) => {
      return props.classes.indicator;
    }};
  }
`;

const CustomTab = styled(Tab)`
  padding-top: 1.8rem;
  padding-bottom: calc(1.8rem - 8px);
`;

export default function TabBar(props: TabBarProps) {
    const theme = useTheme();
    const handleChange = (event, newValue) => {
        props.onChange(newValue);
    };

    return (
        <CustomTabs
            classes={{
                indicator:
                    theme.colors[props.tabIndicatorColor ?? 'primaryMain']
            }}
            value={props.selected}
            onChange={handleChange}
        >
            {props.tabs.map((tab, index) => {
                return (
                    <CustomTab
                        key={index}
                        label={(
                            <Box
                                alignItems={'center'}
                                flexDirection={'row'}
                            >
                                <Box>
                                    <Text color={'black'}>{tab.title}</Text>
                                </Box>
                                {
                                    !!tab.featured && (
                                        <Box ml={'s'}>
                                            <Badge
                                                title={tab.featured.title}
                                                color={tab.featured.color}
                                            />
                                        </Box>
                                    )
                                }
                            </Box>

                        )}
                        style={{
                            textTransform: 'capitalize',
                            fontFamily: theme.textVariants.body.fontFamily,
                            fontSize: theme.textVariants.body.fontSize
                        }}
                        {...a11yProps(index, props.id + tab.id)}
                    />
                );
            })}
        </CustomTabs>
    );
}
