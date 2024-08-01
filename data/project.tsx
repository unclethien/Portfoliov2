export const WEB_APPS = [
  {
    title: "Healthcare Correspondence LLM",
    tags: [
      "Python",
      "Chroma DB",
      "Llama 2",
      "Flask API",
      "JavaScript",
      "Tesseract OCR",
      "HTML & CSS",
    ],
    description:
      "Developed a proof-of-concept Healthcare Correspondence Chatbot using OCR, Chroma database, LLama 2 LLM, and a user-friendly web interface to streamline document searches for healthcare professionals. Collaborated in a team to process and store over 10,000 healthcare correspondence documents, integrating OCR, data vectorization, and semantic similarity search for efficient retrieval. Optimized LLM performance with GPU-based inference on AWS, reducing response time from 2.5 minutes to 15 seconds, and conducted thorough testing to ensure high accuracy in answering user queries.",
    thumbnail: "#",
    repo: "#",
  },
  {
    title: "Brain Tumor Detection – Undergrad Research",
    repo: "https://github.com/adarshaacharya/CsOverflow",
    thumbnail: "#",
    description:
      "Conducted a comprehensive analysis of advanced machine learning techniques, including InceptionV3, ResNet, VGG, YOLOv9, GELAN, and Xception, for accurate brain tumor classification using MRI scans. Developed an ensemble model combining InceptionV3, ResNet, and VGG classifiers, achieving a superior accuracy of 0.956, showcasing the effectiveness of ensemble learning in medical image analysis. Utilized state-of-the-art deep learning architectures like YOLOv9 and GELAN-C, and optimized training techniques to enhance brain tumor detection accuracy, contributing to the advancement of medical imaging and diagnosis.",
    tags: [
      "Python",
      "YOLOv9 ",
      "InceptionV3",
      "ResNet",
      "VGG",
      "Xception",
      "GELAN",
    ],
  },
  {
    title: "MoodTunes – HackUTD X Golden Hour",
    repo: "#",
    demo: "https://devpost.com/software/moodtunes-saq3b4",
    thumbnail: "/_static/projects/passman.png",
    description:
      "Developed and implemented facial emotion recognition models using convolutional neural networks to detect user emotions from video in real-time with over 90% accuracy. Built a backend system to analyze video from the user webcam, extract facial frames, run recognition models, and return emotion analysis results to the frontend in under 100ms per frame.",
    tags: ["Python", "Keras", "NextJS", "TensorFlow", "Flask API", "OpenCV"],
  },
] as const;
