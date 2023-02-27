import { render, screen } from '@testing-library/react';
import BaseAccordion from './base-accordion';
import '@testing-library/jest-dom';

const onClick = jest.fn();

describe('BaseAccordion', () => {
    it('Should render the accordion', () => {
        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={false}
                title="Test"
                wasOpen={false}
            >
                Test
            </BaseAccordion>
        );

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toBeInTheDocument();
    });

    it('Should not render passed accordion content if it is not open', () => {
        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={false}
                title="Test"
                wasOpen={false}
            >
                Test content
            </BaseAccordion>
        );

        const accordionContent = screen.queryByText('Test content');

        expect(accordionContent).not.toBeInTheDocument();
    });

    it('Should not render passed accordion content if it is not open', () => {
        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={true}
                title="Test"
                wasOpen={false}
            >
                Test content
            </BaseAccordion>
        );

        const accordionContent = screen.getByText('Test content');

        expect(accordionContent).toBeInTheDocument();
    });

    it('Should attach a given class to the component', () => {
        const className = 'test-class';

        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={false}
                title="Test"
                wasOpen={false}
                className={className}
            >
                Test
            </BaseAccordion>
        );

        const accordionContainer = screen.getByTestId('accordionContainer');

        expect(accordionContainer).toHaveClass(className);
    });

    it('Should render the title', () => {
        const title = 'test title';

        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={false}
                title={title}
                wasOpen={false}
            >
                Test
            </BaseAccordion>
        );

        const titleElement = screen.getByText(title);

        expect(titleElement).toBeInTheDocument();
    });

    it('Should render the chevron', () => {
        render(
            <BaseAccordion
                onClick={onClick}
                isOpen={false}
                title="Test"
                wasOpen={false}
            >
                Test
            </BaseAccordion>
        );

        const chevron = screen.getByTestId('chevron');

        expect(chevron).toBeInTheDocument();
    });

    it('Should trigger onClick when clicked', () => {
        const clickMock = jest.fn();

        render(
            <BaseAccordion
                onClick={clickMock}
                isOpen={false}
                title="Test"
                wasOpen={false}
            >
                Test
            </BaseAccordion>
        );

        const headingRowButton = screen.getByTestId('headingRow');

        headingRowButton.click();

        expect(clickMock).toHaveBeenCalled();
    });
});
