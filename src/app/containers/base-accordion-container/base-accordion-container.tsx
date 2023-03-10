'use client';

import BaseAccordion from '@/app/components/base-accordion/base-accordion';
import { ReactNode, useState } from 'react';

export default function BaseAccordionContainer({
    children,
    title,
    className,
    initialState = false,
}: {
    children: ReactNode;
    title: string;
    className?: string;
    initialState?: boolean;
}) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(initialState);

    const handleAccordionClick = ($event: React.MouseEvent<unknown>) => {
        $event.stopPropagation();

        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <BaseAccordion
            className={className}
            title={title}
            isOpen={isAccordionOpen}
            onClick={($event) => handleAccordionClick($event)}
        >
            {children}
        </BaseAccordion>
    );
}
