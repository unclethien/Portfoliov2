export const WEB_APPS = [
  {
    title: "Healthcare Correspondence LLM",
    thumbnail: "/projects_thumbnails/Healthcare LLM.png",
    repo: "https://github.com/unclethien",
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
  },
  {
    title: "Brain Tumor Detection – Undergrad Research",
    repo: "https://github.com/unclethien/Computer_Vision_UR",
    thumbnail: "/projects_thumbnails/braintumor.jpg",
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
    demo: "https://devpost.com/software/moodtunes-saq3b4",
    thumbnail: "/projects_thumbnails/moodtunes.jpg",
    description:
      "Developed and implemented facial emotion recognition models using convolutional neural networks to detect user emotions from video in real-time with over 90% accuracy. Built a backend system to analyze video from the user webcam, extract facial frames, run recognition models, and return emotion analysis results to the frontend in under 100ms per frame.",
    tags: ["Python", "Keras", "NextJS", "TensorFlow", "Flask API", "OpenCV"],
  },
  {
    title:
      "Predicting Red Wine Quality from Chemical Properties using Machine Learning",
    repo: "https://github.com/unclethien/Predicting-Red-Wine-Quality-from-Chemical-Properties-using-Machine-Learning",
    thumbnail: "/projects_thumbnails/redwine.jpg",
    description:
      "Developed regression models in Python, including SGDRegressor and OLS Regression, to predict expert wine quality ratings from chemical attributes. Tuned hyperparameters of SGDRegressor using GridSearchCV to achieve an optimized model with a test RMSE of 0.634. Performed exploratory data analysis on a dataset of 1599 wines. Used statistical analysis and data visualization techniques to identify key quality drivers, including alcohol content and volatile acidity.",
    tags: ["Python", "SGDRegressor", "OLS Regression", "GridSearchCV"],
  },
  {
    title: "Esport Data Analysis",
    repo: "https://github.com/unclethien/Capstone-Project---Esport-Data-Analysis",
    demo: "https://public.tableau.com/app/profile/thien.nguyen7172/viz/EsportDataAnalysis/Capsstonepresentation",
    thumbnail: "/projects_thumbnails/Esport.png",
    description:
      "The extensive analysis of over 10,000 professional esports earning data revealed several insightful trends in the esports industry using Python for data manipulation and modeling and Tableau for interactive data visualization.",
    tags: ["Python", "Tableau"],
  },
] as const;
