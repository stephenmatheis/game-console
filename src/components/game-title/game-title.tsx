import { motion } from 'motion/react';
import styles from './game-title.module.scss';
import { useState } from 'react';

const audioCtx = new AudioContext();

function playTilePlunk(frequency = 300 + Math.random() * 80) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // osc.type = 'triangle';
    osc.type = 'sine';
    osc.frequency.value = frequency;

    const now = audioCtx.currentTime;

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.125);

    // gain.gain.setValueAtTime(0, now);
    // gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
    // gain.gain.linearRampToValueAtTime(0.001, now + 0.4);

    osc.start(now);
    osc.stop(now + 0.1);
}

export function GameTitle() {
    const [start, setStart] = useState(false);
    const [selected, setSelected] = useState<'New Game' | 'Load'>('New Game');

    return (
        <>
            {start && (
                <div className={styles['game-title']}>
                    <motion.div className={styles.name}>
                        <div className={styles.opening}>
                            <motion.span
                                className={styles.normal}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.9 }}
                            >
                                Definitely
                            </motion.span>
                            <motion.span
                                className={styles.emphasize}
                                initial={{ opacity: 0, scale: 0.5, translateY: -10, rotate: 0 }}
                                animate={{ opacity: 1, scale: 2, translateY: 0, rotate: -5 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 1.1 }}
                            >
                                Not
                            </motion.span>
                        </div>
                        <div className={styles.pokemon}>
                            {[
                                { letter: 'P', x: 46, y: 10, r: -12, fontSize: '70px', zIndex: 0 },
                                { letter: 'o', x: 32, y: 3, r: -10, fontSize: '44px', zIndex: 1 },
                                { letter: 'K', x: 24, y: 4, r: -8, fontSize: '60px', zIndex: 0 },
                                { letter: 'é', x: 16, y: -8, r: -4, fontSize: '50px', zIndex: 1 },
                                { letter: 'M', x: 12, y: 2, r: 4, fontSize: '55px', zIndex: 0 },
                                { letter: 'o', x: 8, y: 1, r: 9, fontSize: '44px', zIndex: 1 },
                                { letter: 'N', x: 0, y: 10, r: 12, fontSize: '60px', zIndex: 0 },
                            ].map(({ letter, x, y, r, fontSize, zIndex }, i) => (
                                <motion.span
                                    key={i}
                                    style={{
                                        fontSize,
                                        zIndex,
                                    }}
                                    initial={{ translateX: x, translateY: -20, rotate: 0, opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        translateX: x,
                                        translateY: y,
                                        rotate: r,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.1 }}
                                    onAnimationStart={() => {
                                        setTimeout(() => {
                                            playTilePlunk();
                                        }, (i + 1.6) * 100);
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                    <div className={styles.buttons}>
                        <motion.div
                            className={styles.arrows}
                            initial="top"
                            animate={selected === 'New Game' ? 'top' : 'bottom'}
                            variants={{
                                top: {
                                    translateY: 0,
                                },
                                bottom: {
                                    translateY: 32,
                                },
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                            <motion.div
                                className={styles.right}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 2.2 }}
                            >
                                ►
                            </motion.div>
                            <motion.div
                                className={styles.left}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 2.2 }}
                            >
                                ◄
                            </motion.div>
                        </motion.div>
                        <motion.button
                            className={styles.start}
                            onClick={() => {
                                setStart(true);
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    opacity: { type: 'spring', stiffness: 300, damping: 15, delay: 1.5 },
                                    scale: { type: 'spring', stiffness: 300, damping: 15, delay: 1.5 },
                                },
                            }}
                            whileHover={{
                                color: 'rgb(255, 204, 0)',
                                transition: {},
                            }}
                            onHoverStart={() => {
                                setSelected('New Game');
                            }}
                        >
                            New Game
                        </motion.button>
                        <motion.button
                            className={styles.restart}
                            onClick={() => {
                                setStart(false);
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    opacity: { type: 'spring', stiffness: 300, damping: 15, delay: 1.5 },
                                    scale: { type: 'spring', stiffness: 300, damping: 15, delay: 1.5 },
                                },
                            }}
                            whileHover={{
                                color: 'rgb(255, 204, 0)',
                                transition: {},
                            }}
                            onHoverStart={() => {
                                setSelected('Load');
                            }}
                        >
                            Load
                        </motion.button>
                    </div>
                </div>
            )}

            <div className={styles.toolbar}>
                <motion.button
                    className={styles.start}
                    onClick={() => {
                        setStart(true);
                    }}
                    whileHover={{
                        scale: 1.2,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                >
                    Start
                </motion.button>
                <motion.button
                    className={styles.restart}
                    onClick={() => {
                        setStart(false);
                    }}
                    whileHover={{
                        scale: 1.2,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                >
                    Restart
                </motion.button>
            </div>
        </>
    );
}
