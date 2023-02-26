import '../styles/styles.scss';
import styles from './layout.module.scss';
import Link from 'next/link';

export const metadata = {
    title: 'Next Beer app',
    description: 'An awesome Beer app',
};

export default function rootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Beer app</title>
                <base href="/" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* TODO add favicons */}
                <link
                    rel="icon"
                    href="assets/static/favicon.png"
                    type="image/png"
                />
                <link rel="shortcut icon" href="assets/static/favicon.ico" />
            </head>
            <body>
                <main>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>
                    </nav>
                    <div className={styles.content}>
                        <div className={styles.content__main} role="main">
                            {children}
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
