import React from "react";

const useVariants = () => {

    const sideNavVariant = {
        hidden: {
            width: '10%',
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
