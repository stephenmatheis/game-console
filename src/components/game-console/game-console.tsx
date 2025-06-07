import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { GameTitle } from '../game-title';
import styles from './game-console.module.scss';

function getTranslateY(gameConsole: HTMLDivElement | null): number {
    if (!gameConsole) return 0;

    const { y: gameConsoleY } = gameConsole.getBoundingClientRect();

    return 90 - gameConsoleY;
}

export function GameConsole() {
    const [isOn, setIsOn] = useState(false);
    const [start, setStart] = useState(false);
    const gameConsoleRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const translateY = useRef<number>(0);

    useEffect(() => {
        if (!gameConsoleRef.current) return;

        translateY.current = getTranslateY(gameConsoleRef.current);
    }, []);

    return (
        <motion.div
            ref={gameConsoleRef}
            className={styles['game-console']}
            animate={isOn ? 'on' : 'off'}
            initial="off"
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
            variants={{
                off: {
                    scale: 1,
                    translateY: 0,
                },
                on: {
                    scale: 2,
                    translateY: translateY.current || 0,
                },
            }}
        >
            {/* On Button */}
            <motion.button
                ref={buttonRef}
                className={styles.on}
                onClick={() => setIsOn((prev) => !prev)}
                whileHover={{
                    height: 15,
                    top: -25,
                    transition: { ease: 'easeOut', duration: 0.15 },
                }}
                animate={isOn ? 'on' : 'off'}
                initial="off"
                variants={{
                    off: {
                        translateX: 0,
                    },
                    on: {
                        translateX: -30,
                    },
                }}
            />

            {/* Top */}
            <div className={styles.top}>
                <div className={styles.left} />
                <div className={styles.right} />
            </div>

            {/* Screen */}
            <div className={styles.bezel}>
                <div className={styles.screen}>
                    <div className={styles.bars}>
                        <div className={styles.left} />
                        <div className={styles.middle}>
                            <div className={styles.dot} />
                            <div className={styles.dot} />
                            <div className={styles.dot} />
                        </div>
                        <div className={styles.right} />
                    </div>
                    <motion.div
                        className={styles.display}
                        animate={isOn ? 'on' : 'off'}
                        initial="off"
                        transition={{ ease: [0.8, 0, 0.5, 1], duration: 0.25, delay: 0.7 }}
                        variants={{
                            off: {
                                backgroundImage:
                                    'linear-gradient(to bottom, white 50%, #6e8690 50%, #6e8690 50%, white 50%)',
                                backgroundSize: '100% 0%',
                            },
                            on: {
                                backgroundImage:
                                    'linear-gradient(to bottom, white 50%, #6e8690 50%, #6e8690 50%, white 50%)',
                                backgroundSize: '100% 100%',
                            },
                        }}
                        onAnimationComplete={() =>
                            setTimeout(() => {
                                setStart(true);
                            }, 1000)
                        }
                    >
                        {isOn && start && <GameTitle />}
                    </motion.div>
                </div>
            </div>

            {/* Grill */}
            <div className={styles.grill}>
                <div className={styles.bar} />
                <div className={styles.vertical}>
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>
                <div className={styles.bar} />
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <div className={styles.dpad}>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M89.5 0C95.299 0 100 4.70101 100 10.5V46.5C100 48.433 101.567 50 103.5 50H139.5C145.299 50 150 54.701 150 60.5V89.5C150 95.299 145.299 100 139.5 100H103.5C101.567 100 100 101.567 100 103.5V139.5C100 145.299 95.299 150 89.5 150H60.5C54.701 150 50 145.299 50 139.5V103.5C50 101.567 48.433 100 46.5 100H10.5C4.70101 100 2.25497e-07 95.299 0 89.5V60.5C0 54.701 4.70101 50 10.5 50H46.5C48.433 50 50 48.433 50 46.5V10.5C50 4.70101 54.701 2.2549e-07 60.5 0H89.5Z"
                            fill="black"
                        />
                        <path
                            d="M93 50C93 53.866 96.134 57 100 57H136C139.866 57 143 60.134 143 64V86C143 89.866 139.866 93 136 93H100C96.134 93 93 96.134 93 100V136C93 139.866 89.866 143 86 143H64C60.134 143 57 139.866 57 136V100C57 96.134 53.866 93 50 93H14C10.134 93 7 89.866 7 86V64C7 60.134 10.134 57 14 57H50C53.866 57 57 53.866 57 50V14C57 10.134 60.134 7 64 7H86C89.866 7 93 10.134 93 14V50Z"
                            fill="#524346"
                        />
                    </svg>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button} />
                    <div className={styles.button} />
                </div>
            </div>

            {/* Pills */}
            <div className={styles.pills}>
                <div className={styles.pill} />
                <div className={styles.pill} />
            </div>

            {/* Vent */}
            <div className={styles.vent}>
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
            </div>
        </motion.div>
    );
}
