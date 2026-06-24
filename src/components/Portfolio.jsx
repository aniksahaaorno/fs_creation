import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import showreelImg from "../assets/showreel.png";
import "./Portfolio.css";

import { urlFor } from "@/lib/imageUrl";
import { WORKS_QUERY } from "@/lib/queries";
import { sanity } from "@/lib/sanity";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const works = await sanity.fetch(WORKS_QUERY);

        console.log("WORKS:", works);

        setProjects(works);

        const uniqueCategories = [
          "All",
          ...new Set(
            works.map((work) => work.category?.name).filter(Boolean),
          ),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category?.name === filter,
        );

  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (url.includes("youtube.com")) {
      const id = new URLSearchParams(new URL(url).search).get("v");

      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (url.includes("facebook.com")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url,
      )}&show_text=0&width=560`;
    }

    return url;
  };

  if (loading) {
    return (
      <section
        id="work"
        className="section-padding portfolio-section"
      >
        <div className="container">
          <h2 className="section-title">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="section-padding portfolio-section">
      <div className="container">
        <motion.div
          className="showreel-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="showreel-wrapper"
            onClick={() =>
              setSelectedProject({
                title: "2026 Showreel",
                youtubeUrl: "https://youtu.be/MVPX66AY_xg",
              })
            }
          >
            <img
              src={showreelImg}
              alt="FS Creation Showreel"
              className="showreel-cover"
            />

            <div className="play-overlay">
              <button className="play-btn">
                <Play size={40} fill="currentColor" />
              </button>

              <span className="play-text">Watch 2026 Showreel</span>
            </div>
          </div>
        </motion.div>

        <div className="portfolio-header">
          <h2 className="section-title">Selected Works</h2>

          <div className="filter-btns">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  filter === cat ? "active" : ""
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                className="portfolio-item"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-img-wrapper">
                  <img
                    src={urlFor(project.image).width(1000).url()}
                    alt={project.title}
                  />

                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h3>{project.title}</h3>

                      <span className="category">
                        {project.category?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <X size={30} />
              </button>

              <div className="video-aspect-ratio">
                <iframe
                  src={getEmbedUrl(selectedProject.youtubeUrl)}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
