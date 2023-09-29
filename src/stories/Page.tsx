import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
    name: string;
};

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>();

    return (
        <article>
            <Header
                user={user}
                onLogin={() => setUser({ name: 'Jane Doe' })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: 'Jane Doe' })}
            />

            <section className="storybook-page">
                <h2>Pages in Storybook</h2>
                <p>
                    We recommend building UIs with a
                    {' '}
                    <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
                        <strong>component-driven</strong>
                    </a>
                    {' '}
                    process starting with atomic components and ending with pages.
                </p>
                <p>
                    Render pages with mock data. This makes it easy to build and review page states without
                    needing to navigate to them in your app. Here are some handy patterns for managing page
                    data in Storybook:
                </p>
                <ul>
                    <li>
                        Use a higher-level connected component. Storybook helps you compose such data from the
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        "args" of child component stories
                    </li>
                    <li>
                        Assemble data in the page component from your services. You can mock these services out
                        using Storybook.
                    </li>
                </ul>
                <p>
                    Get a guided tutorial on component-driven development at
                    {' '}
                    <a href="renderers/react/template/cli/ts/Page" target="_blank" rel="noopener noreferrer">
                        Storybook tutorials
                    </a>
                    . Read more in the
                    {' '}
                    <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
                        docs
                    </a>
                    .
                </p>
                <div className="tip-wrapper">
                    <span className="tip">Tip</span>
                    {' '}
                    Adjust the width of the canvas with the
                    {' '}
                    <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <path
                                id="a"
                                fill="#999"
                            />
                        </g>
                    </svg>
                    Viewports addon in the toolbar
                </div>
            </section>
        </article>
    );
};
