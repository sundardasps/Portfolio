import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
    children: ReactNode;
};

const TextUpAnimation = ({ children }: Props) => {
    return (
        <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1,}} transition={{delay:0.1,ease:'easeIn'}}>
            {children}
        </motion.div>
    );
};

export default TextUpAnimation;

