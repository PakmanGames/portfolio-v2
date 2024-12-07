'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypingEffect({ words }) {
    return (
        <Typewriter words={words} cursor={true} loop={true} typeSpeed={50} deleteSpeed={50} delaySpeed={1500} cursorStyle='_' />
    );
}