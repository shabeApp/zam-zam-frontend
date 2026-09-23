const DecorativeSeparator = () => (
    <svg
        viewBox="0 0 2400 60"
        className="w-full h-6 sm:h-8 md:h-10"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern
                id="kantha"
                width="80"
                height="60"
                patternUnits="userSpaceOnUse"
            >
                {/* Background */}
                <rect width="80" height="60" fill="#F8F5F0" />

                {/* Top Black Line */}
                <rect y="0" width="80" height="2" fill="#111" />

                {/* Top Red Band */}
                <rect y="2" width="80" height="8" fill="#A91D2E" />

                {/* Top Zigzag */}
                <path
                    d="M0 10 L4 6 L8 10 L12 6 L16 10 L20 6 L24 10 L28 6 L32 10 L36 6 L40 10 L44 6 L48 10 L52 6 L56 10 L60 6 L64 10 L68 6 L72 10 L76 6 L80 10"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1"
                />

                {/* Black Divider */}
                <rect y="12" width="80" height="2" fill="#111" />

                {/* White Diamond Band */}
                <g transform="translate(0 14)">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <g key={i} transform={`translate(${i * 16 + 8},8)`}>
                            <polygon
                                points="0,-6 6,0 0,6 -6,0"
                                fill="#fff"
                                stroke="#111"
                                strokeWidth="1"
                            />
                            <polygon
                                points="0,-3 3,0 0,3 -3,0"
                                fill="#A91D2E"
                            />
                        </g>
                    ))}
                </g>

                {/* Black Divider */}
                <rect y="30" width="80" height="2" fill="#111" />

                {/* Red Diamond Chain */}
                <g transform="translate(0 32)">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <g key={i} transform={`translate(${i * 16 + 8},8)`}>
                            <polygon
                                points="0,-6 6,0 0,6 -6,0"
                                fill="#A91D2E"
                                stroke="#111"
                                strokeWidth="1"
                            />
                            <polygon
                                points="0,-3 3,0 0,3 -3,0"
                                fill="#fff"
                            />
                        </g>
                    ))}
                </g>

                {/* Bottom Divider */}
                <rect y="48" width="80" height="2" fill="#111" />

                {/* Bottom Zigzag */}
                <path
                    d="M0 50 L4 54 L8 50 L12 54 L16 50 L20 54 L24 50 L28 54 L32 50 L36 54 L40 50 L44 54 L48 50 L52 54 L56 50 L60 54 L64 50 L68 54 L72 50 L76 54 L80 50"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1"
                />

                {/* Bottom Red Band */}
                <rect y="50" width="80" height="8" fill="#A91D2E" />

                {/* Bottom Black Line */}
                <rect y="58" width="80" height="2" fill="#111" />
            </pattern>
        </defs>

        <rect width="2400" height="60" fill="url(#kantha)" />
    </svg>
);

export default DecorativeSeparator;