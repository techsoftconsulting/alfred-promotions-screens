import React from 'react';
import {CardWidgetSkeletonProps} from './CardWidgetSkeletonProps';
import {Card, CardContent, CardTitle, Skeleton} from "@main-components/Base";

export function CardWidgetSkeleton(props: CardWidgetSkeletonProps) {
    return (
        <Card>
            <CardTitle
                style={{
                    width: "100%"
                }}
                title={
                    props.title ??
                    <Skeleton
                        type={"rectangle"}
                        loading={true}
                        style={{
                            width: "100%"
                        }}
                    />
                }
            />
            <CardContent>
                {
                    props.children ? props.children : (
                        <Skeleton
                            type={"rectangle"}
                            loading={true}
                            height={300}
                        />

                    )
                }

            </CardContent>
        </Card>
    )
}
