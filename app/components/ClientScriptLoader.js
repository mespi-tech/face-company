'use client'
import { useEffect } from 'react';

const ClientScriptLoader = () => {
  useEffect(() => {
    const loadScript = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import('jquery')).default;

        window.jQuery = $;
        window.$ = $;

        await import('../../public/js/wow.min');
        await import('../../public/js/vegas.min');
        await import('../../public/js/vegas-custom');
        await import('../../public/js/vanilla-tilt.min');
        await import('../../public/js/swiper.min');
        await import('../../public/js/popper.min');
        await import('../../public/js/particles.min');
        await import('../../public/js/owl.carousel.min');
        await import('../../public/js/jquery.waypoints.min');
        await import('../../public/js/jquery.min');
        await import('../../public/js/jquery.meanmenu');
        await import('../../public/js/jquery.magnific-popup.min');
        await import('../../public/js/jquery.counterup.min');
        await import('../../public/js/jquery.appear.min');
        await import('../../public/js/isotope.pkgd.min');
        await import('../../public/js/bootstrap.bundle.min');
        await import('../../public/js/main');
      }
    };
    loadScript();
  }, []);

  return null;
};

export default ClientScriptLoader;
