import React from "react";

const useVariants = () => {

    const sideNavVariant = {
        hidden: {
            width: '85px',
            transistion: {
                ease: 'easeOut'
            }
        },

        show: {
            width: '100%',
            transistion: {
                ease: 'easeIn'
            }
        }
    }

  return { sideNavVariant }
};

export default useVariants;
