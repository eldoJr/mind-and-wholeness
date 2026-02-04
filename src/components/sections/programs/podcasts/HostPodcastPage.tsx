import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Breadcrumb } from '../../../ui';
import { ChevronLeft } from 'lucide-react';
import ceoImg from './../../../../assets/images/ceo.png';
import cooImg from './../../../../assets/images/viviana.jpeg';
import ctoImg from './../../../../assets/images/michael.jpeg';

const HostPodcastPage = () => {
    const { hostId } = useParams<{ hostId: string }>();

    // Map hostId to host details
    // Normalize hostId for easier matching (e.g. lilian-titus -> Lilian Titus)
    const getHostDetails = (id: string | undefined) => {
        if (!id) return null;

        // Normalize string: replace hyphens with spaces, etc.
        const name = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        // Specific mapping if needed for images/descriptions
        if (id.includes('lilian')) {
            return {
                name: "Lilian Titus",
                role: "Founder & Visionary Leader",
                image: ceoImg,
                description: "Lilian founded Mind and Wholeness out of a deep calling to restore balance and purpose in the lives of young people."
            };
        } else if (id.includes('viviana')) {
            return {
                name: "Viviana Claudia",
                role: "Chief Operating Officer (COO)",
                image: cooImg,
                description: "She is a brilliant and goal-oriented individual who organizes and coordinates events with excellence and precision."
            };
        } else if (id.includes('michael')) {
            return {
                name: "Michael Mugwenhi",
                role: "Chief Technology Officer (CTO)",
                image: ctoImg,
                description: "Michael is a brilliant and goal-oriented individual who creates and manages technological innovation with excellence and precision."
            };
        }

        return {
            name: name,
            role: "Podcast Host",
            image: null,
            description: "Host at Mind and Wholeness"
        };
    };

    const host = getHostDetails(hostId);

    const podcastEpisodes = [
        "https://open.spotify.com/embed/episode/0L2xf8hS13XurGZZbINuLP?utm_source=generator&t=0",
        "https://open.spotify.com/embed/episode/0eHVZ8iPKU91QZBxajZ4JO?utm_source=generator&t=0",
        "https://open.spotify.com/embed/episode/0eHVZ8iPKU91QZBxajZ4JO?utm_source=generator&t=0",
        "https://open.spotify.com/embed/episode/02qV0q8Zq0j3JfInOX6rI0?utm_source=generator&t=0",
        "https://open.spotify.com/embed/episode/5hE381jbRlRJ2200hS15hJ?utm_source=generator&t=0",
        "https://open.spotify.com/embed/episode/0fpURCdelUynmrDhUsqDjF?utm_source=generator&t=0"
    ];

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Podcasts', href: '/programs/podcasts' },
        { label: host?.name || 'Host' }
    ];

    const handleScrollToPodcasts = () => {
        const element = document.getElementById('host-podcasts-list');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!host) {
        return <div>Host not found</div>;
    }

    return (
        <motion.section
            className="bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31] py-12 md:py-20 px-6">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full md:w-1/3 max-w-sm"
                        >
                            {host.image ? (
                                <img
                                    src={host.image}
                                    alt={host.name}
                                    className="w-full aspect-square object-cover shadow-2xl rounded-sm border-4 border-white/10"
                                />
                            ) : (
                                <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                                {host.name}
                            </h1>
                            <p className="text-xl text-white/80 font-light mb-6">
                                {host.role}
                            </p>
                            <p className="text-white/70 max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
                                {host.description}
                            </p>

                            <button
                                onClick={handleScrollToPodcasts}
                                className="px-8 py-3 bg-white text-[#651d31] font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Listen Now
                            </button>
                        </motion.div>
                    </div>
                </Container>
            </div>

            <Container className="py-12">
                <div className="mb-8">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <div id="host-podcasts-list" className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif text-gray-900 mb-8 border-b pb-4">
                        Episodes Featuring {host.name}
                    </h2>

                    <div className="flex flex-col gap-8">
                        {podcastEpisodes.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="w-full"
                            >
                                <iframe
                                    data-testid={`host-embed-iframe-${index}`}
                                    style={{ borderRadius: '12px' }}
                                    src={src}
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    title={`${host.name} Podcast Episode ${index + 1}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/programs/podcasts" className="inline-flex items-center text-[#651d31] hover:underline font-medium">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to All Podcasts
                    </Link>
                </div>
            </Container>
        </motion.section>
    );
};

export default HostPodcastPage;
