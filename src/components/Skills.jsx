import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact,
    SiNodedotjs, SiMongodb, SiAmazonwebservices, SiFirebase,
    SiDocker, SiFigma, SiTailwindcss, SiGit, SiNextdotjs,
    SiExpress, SiPostgresql
} from 'react-icons/si'

const skills = [
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', Icon: SiExpress, color: '#ced4da' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
]

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="skills" className="section">
            <div ref={ref} className="wrap">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <span className="section-label">Tech Stack</span>
                    <h2 className="section-title" data-heading="SKILLS">
                        What I work with
                    </h2>
                    <div className="divider" style={{ marginBottom: 40 }} />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
                    gap: 12,
                }}>
                    {skills.map(({ name, Icon, color }, i) => (
                        <motion.div
                            key={name}
                            className="skill-badge"
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: i * 0.035 }}
                            title={name}
                        >
                            <Icon style={{ width: 28, height: 28, color }} />
                            <span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 500, textAlign: 'center' }}>{name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
