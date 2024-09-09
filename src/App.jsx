import React, { useState, useEffect } from 'react';
import { FaSun, FaCalendarAlt, FaBook, FaUtensils, FaClock, FaRandom, FaYoutube, FaChevronDown, FaChevronUp, FaShare, FaHeart, FaComments, FaUser } from 'react-icons/fa';
const CulturalExplorationPlatform = () => {
  const [activeTab, setActiveTab] = useState('community');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [randomTopic, setRandomTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState('');

  const tabs = [
    { id: 'timeline', icon: FaClock, label: 'Timeline' },
    { id: 'community', icon: FaSun, label: 'Community' },
    { id: 'recipes', icon: FaUtensils, label: 'Recipes' },
    { id: 'calendar', icon: FaCalendarAlt, label: 'Calendar' },
    { id: 'quiz', icon: FaBook, label: 'Quiz' },
    { id: 'random', icon: FaRandom, label: 'Random' },
    { id: 'suggestions', icon: FaYoutube, label: 'Suggestions' },
  ];
  const communityPosts = [
    {
      image: "https://i.pinimg.com/564x/1f/a6/c8/1fa6c81a9bee7a90074b8ccce45e24eb.jpg",
      video: "https://www.youtube.com/watch?v=abcdefghijk",
      title: "Exploring the Vedas: Unlocking Ancient Wisdom",
      famous: "Swami Vivekananda",
      city: "Rishikesh",
      scientificReason: "The Vedas contain insights into various scientific concepts, including astronomy, mathematics, and medicine.",
      significance: "The Vedas are the foundational texts of Hinduism, containing timeless teachings on spirituality, ethics, and the nature of reality."
      },
      {
      image: "https://i.pinimg.com/236x/1c/73/54/1c7354dafec7f92371f504f556628745.jpg",
      video: "https://www.youtube.com/watch?v=lmnopqrstuv",
      title: "The Art of Yoga: Uniting Body, Mind, and Spirit",
      famous: "B.K.S. Iyengar",
      city: "Pune",
      scientificReason: "Yoga has been shown to have numerous physical, mental, and emotional health benefits, supported by scientific research.",
      significance: "Yoga is an integral part of Indian culture, promoting holistic well-being and self-realization."
      },
      {
      image: "https://i.pinimg.com/236x/53/bf/73/53bf73b59113fd4a10528cf7fa7a93e1.jpg",
      video: "https://www.youtube.com/watch?v=wxyz0123456",
      title: "Exploring the Diversity of Indian Music",
      famous: "Ravi Shankar",
      city: "Kolkata",
      scientificReason: "Indian music has a rich history and complex system of scales, rhythms, and improvisation, reflecting the country's diverse cultural heritage.",
      significance: "Indian music is not only a form of artistic expression but also a means of spiritual exploration and cultural preservation."
      },
   
      {
      image: "https://i.pinimg.com/236x/f7/ec/80/f7ec80d44f9e89122eb0ee5fbf01b2c6.jpg",
      video: "https://www.youtube.com/watch?v=ijklmnopqrs",
      title: "Celebrating Durga Puja: Honoring the Divine Feminine",
      famous: "Sarada Devi",
      city: "Kolkata",
      scientificReason: "Durga Puja is a celebration of the Mother Goddess, representing the cosmic feminine energy that sustains and destroys the universe.",
      significance: "Durga Puja is one of the most significant Hindu festivals, marking the triumph of good over evil and the celebration of the divine feminine."
      },
      {
      image: "https://i.pinimg.com/236x/0a/60/02/0a6002b2f852c03fd748acc90ca81cf1.jpg",
      video: "https://www.youtube.com/watch?v=tuvwxyz0123",
      title: "The Rituals and Significance of Chhath Puja",
      famous: "Manoj Tiwari",
      city: "Bihar",
      scientificReason: "Chhath Puja is a solar festival that honors the sun god, Surya, and his wife, Usha, for sustaining life on Earth.",
      significance: "Chhath Puja is a significant harvest festival in parts of India, celebrating the sun's life-giving powers and the importance of nature in sustaining human existence."
      },
      {
      image: "https://i.pinimg.com/236x/6d/d5/eb/6dd5eb5eb4427a8874f45827e334a661.jpg",
      video: "https://www.youtube.com/watch?v=abcde0987fg",
      title: "Embracing the Spirit of Navaratri: Celebrating the Divine Feminine",
      famous: "Mata Amritanandamayi",
      city: "Kerala",
      scientificReason: "Navaratri is a festival that honors the nine divine forms of the Mother Goddess, representing different aspects of her power and influence.",
      significance: "Navaratri is a major Hindu festival that celebrates the divine feminine, highlighting the importance of women in Indian culture and the balance between masculine and feminine energies."
      },
      {
      image: "https://i.pinimg.com/236x/6e/72/40/6e72404f3000e11b0c153c00727f883e.jpg",
      video: "https://www.youtube.com/watch?v=hijklmnop45",
      title: "Unraveling the Significance of Pongal: A Harvest Festival",
      famous: "Shankar Mahadevan",
      city: "Tamil Nadu",
      scientificReason: "Pongal is a harvest festival that coincides with the winter solstice, marking the sun's journey northward and the beginning of a new agricultural cycle.",
      significance: "Pongal is a celebration of the Tamil culture and the importance of agriculture, honoring the sun, the land, and the prosperity it brings to the people."
      },
      {
      image: "https://i.pinimg.com/236x/21/17/fc/2117fc937ba237bd801be0bf5617b00c.jpg",
      video: "https://www.youtube.com/watch?v=qrstuvwxyz",
      title: "Exploring the Spiritual Significance of Diwali",
      famous: "Deepika Padukone",
      city: "Ayodhya",
      scientificReason: "Diwali, the Festival of Lights, marks the return of Lord Rama to Ayodhya after his 14-year exile, representing the triumph of good over evil.",
      significance: "Diwali is one of the most widely celebrated Hindu festivals, symbolizing the victory of light over darkness, knowledge over ignorance, and hope over despair."
      },
    {
    image: "https://i.pinimg.com/236x/fb/04/1d/fb041d94917b1f1707e50d62ae83f6f9.jpg",
    video: "https://www.youtube.com/watch?v=abcdefghijk",
    title: "Exploring the Vedas: Unlocking Ancient Wisdom",
    famous: "Swami Vivekananda",
    city: "Rishikesh",
    scientificReason: "The Vedas contain insights into various scientific concepts, including astronomy, mathematics, and medicine.",
    significance: "The Vedas are the foundational texts of Hinduism, containing timeless teachings on spirituality, ethics, and the nature of reality."
    },
    {
    image: "https://i.pinimg.com/236x/9d/bf/d0/9dbfd05de64d8621995e29f5d3df9201.jpg",
    video: "https://www.youtube.com/watch?v=lmnopqrstuv",
    title: "The Art of Yoga: Uniting Body, Mind, and Spirit",
    famous: "B.K.S. Iyengar",
    city: "Pune",
    scientificReason: "Yoga has been shown to have numerous physical, mental, and emotional health benefits, supported by scientific research.",
    significance: "Yoga is an integral part of Indian culture, promoting holistic well-being and self-realization."
    },
  
 
    ];

  const quizQuestions = [
    {
      question: "Which ancient Indian text mentions a flying machine called 'Vimana'?",
      options: ["Rigveda", "Ramayana", "Mahabharata", "Arthashastra"],
      correctAnswer: "Ramayana",
    },
    {
      question: "What is the name of the Hindu festival of colors?",
      options: ["Diwali", "Holi", "Navratri", "Pongal"],
      correctAnswer: "Holi",
    },
    {
      question: "Which of these is not one of the four Vedas?",
      options: ["Rigveda", "Samaveda", "Yajurveda", "Bhagavad Gita"],
      correctAnswer: "Bhagavad Gita",
    },
  ];

  const recipes = [
    {
      name: "Modak",
      image: "https://i.pinimg.com/236x/2b/4d/22/2b4d22af9d0fb75e11a470c14e1277eb.jpg",
      description: "Modak is a sweet dumpling filled with coconut and jaggery, famous in Maharashtra.",
      festival: "Ganesh Chaturthi",
      popularity: "Modak gained popularity due to its association with Lord Ganesha. It's believed to be his favorite sweet, making it an essential offering during Ganesh Chaturthi celebrations.",
      story: "Legend has it that once Lord Ganesha, upon returning home, was extremely hungry. His mother, Goddess Parvati, created a sweet dumpling filled with coconut and jaggery. Ganesha loved it so much that it became known as his favorite food.",
      recipe: "1. Prepare the filling with grated coconut and jaggery. 2. Make a dough with rice flour. 3. Shape the dough into small cups, fill with the coconut mixture, and seal. 4. Steam for 15-20 minutes.",
    },
    {
      name: "Pongal",
      image: "https://i.pinimg.com/236x/38/90/7d/38907d97723bce44e0bbb4a6d5bd3e37.jpg",
      description: "Pongal is a traditional South Indian dish made with rice and lentils, often prepared during the Pongal festival.",
      festival: "Pongal",
      popularity: "Pongal is both a harvest festival and a dish. The dish symbolizes prosperity and is offered to the Sun God during the festival.",
      story: "The term 'Pongal' means 'to boil over' in Tamil. The tradition of letting the pot of rice boil over symbolizes abundance and prosperity for the coming year.",
      recipe: "1. Cook rice and split mung beans together until soft. 2. Add ghee, cashews, and spices like pepper and cumin. 3. Stir well and serve hot.",
    },
  ];

  const calendarEvents = [
    {
      name: "Diwali",
      date: "November 12, 2024",
      significance: "Festival of Lights, celebrating the victory of light over darkness",
      celebrations: "Lighting diyas, fireworks, family gatherings, and feasts",
      locations: "Varanasi, Jaipur, Amritsar, and most cities across India",
      attendance: "Millions celebrate across India and around the world",
      story: "Diwali commemorates Lord Rama's return to Ayodhya after 14 years of exile and his victory over Ravana. The citizens of Ayodhya welcomed him by lighting oil lamps, which is why Diwali is known as the Festival of Lights.",
      image: "https://i.pinimg.com/236x/21/17/fc/2117fc937ba237bd801be0bf5617b00c.jpg",
    },
    {
      name: "Holi",
      date: "March 25, 2024",
      significance: "Festival of Colors, celebrating the arrival of spring and the triumph of good over evil",
      celebrations: "Playing with colored powders and water, bonfires, music, and dance",
      locations: "Mathura, Vrindavan, and across India",
      attendance: "Widely celebrated across India and in many parts of the world",
      story: "Holi is associated with the legend of Prahlad and Holika. Prahlad, a devotee of Lord Vishnu, was saved from a fire meant to kill him, while the demoness Holika was burned. The festival celebrates this victory of good over evil.",
      image: "https://i.pinimg.com/236x/94/ed/71/94ed710238b98591a1bbf93b6c96fc95.jpg",
    },
  ];

  const timelineEvents = [
    {
      year: "Before Time",
      event: "Creation of the Universe",
      description: "According to Hindu cosmology, the universe was created by Brahma, the creator god. Brahma emerged from the cosmic waters and began the process of creation, bringing forth the various realms and forms of existence.",
      details: "The Vedas, the foundational texts of Hinduism, describe the creation of the universe as a cyclical process, with the universe being created, sustained, and then destroyed, only to be created again. This cycle of creation, preservation, and dissolution is believed to be an eternal process, with Brahma as the primary agent of creation.",
      impact: "The concept of the creation of the universe by Brahma is a central tenet of Hindu cosmology and has profoundly influenced Indian philosophy, art, and culture. It has also shaped the Hindu understanding of the nature of reality and the ultimate purpose of existence.",
      image: "https://i.pinimg.com/564x/5d/8e/2b/5d8e2b13f6829ff1f3b83cfc360f4765.jpg"
    },
    {
      year: "Before Time",
      event: "The Avatars of Vishnu",
      description: "According to Hindu belief, the god Vishnu, the preserver and sustainer of the universe, periodically incarnates on Earth in various forms, or avatars, to restore balance and protect the world from evil.",
      details: "Some of the most famous avatars of Vishnu include Rama, the hero of the epic Ramayana, and Krishna, the divine cowherd who is a central figure in the Bhagavad Gita. These avatars are believed to have appeared at different times throughout history to combat specific threats and restore the cosmic order.",
      impact: "The concept of the avatars of Vishnu has been a powerful source of inspiration in Indian art, literature, and devotional practices. These incarnations of the divine have become the focus of intense devotion and reverence, with many Hindus seeking to emulate the virtues and actions of these avatars in their own lives.",
      image: "https://i.pinimg.com/736x/c5/b8/25/c5b825b1acde4e559d2a95ec13aed989.jpg"
    },
    {
      year: "Before Time",
      event: "The Emergence of Shiva",
      description: "Shiva, the third member of the Hindu triumvirate (the Trimurti), is the destroyer and transformer, responsible for the cycle of creation, preservation, and dissolution.",
      details: "Shiva is often depicted as a powerful, ascetic figure, with a third eye on his forehead and a snake coiled around his neck. He is associated with various aspects of the divine, including consciousness, destruction, and the arts.",
      impact: "The worship of Shiva has been a central part of Hindu religious and cultural life for millennia. Shiva temples, festivals, and iconography are found throughout India, and his influence can be seen in the development of Hindu philosophy, art, and literature.",
      image: "https://i.pinimg.com/736x/6e/ae/06/6eae061cd6587e7306a84f670ea892c4.jpg"
    },
    {
      year: "3000 BCE",
      event: "The Indus Valley Civilization",
      description: "One of the earliest known urban civilizations, the Indus Valley Civilization flourished in the northwestern regions of the Indian subcontinent.",
      details: "The Indus Valley Civilization was characterized by its sophisticated urban planning, advanced drainage systems, and standardized weights and measures. It is believed to have been a highly literate society, though the script used by its inhabitants has not yet been fully deciphered.",
      impact: "The Indus Valley Civilization laid the foundation for many aspects of Indian culture and technology, including agriculture, metallurgy, and possibly yoga and meditation practices. It is considered a precursor to the later Vedic and classical Hindu civilizations.",
      image: "https://i.pinimg.com/736x/dc/36/c5/dc36c5f527b8fdc1ac7a49f9e2da39a0.jpg"
    },
    {
      year: "1500 BCE",
      event: "The Composition of the Vedas",
      description: "The Vedas, the oldest known Sanskrit texts, were composed during this period, forming the basis of Hindu philosophy and religious practices.",
      details: "The Vedas are a large body of religious texts, including the Rigveda, Samaveda, Yajurveda, and Atharvaveda. These texts contain hymns, rituals, and philosophical insights that have profoundly shaped Hindu thought and practice.",
      impact: "The Vedas are considered the foundational scriptures of Hinduism, and their influence can be seen in the development of Hindu theology, ethics, and social norms. They have also influenced other Indian religious and philosophical traditions, such as Buddhism and Jainism.",
      image: "https://i.pinimg.com/564x/1f/a6/c8/1fa6c81a9bee7a90074b8ccce45e24eb.jpg"
    },
    {
      year: "800 BCE",
      event: "The Upanishads and the Bhagavad Gita",
      description: "The Upanishads, a collection of philosophical texts, and the Bhagavad Gita, a seminal Hindu scripture, were composed during this period.",
      details: "The Upanishads explore the nature of the self (atman) and its relationship to the ultimate reality (Brahman), while the Bhagavad Gita is a dialogue between the warrior Arjuna and the divine Krishna, discussing the complex questions of duty, action, and the nature of the divine.",
      impact: "The Upanishads and the Bhagavad Gita have been hugely influential in shaping Hindu thought and practice, particularly the concepts of non-duality, karma, and the path to spiritual liberation. They have also been widely studied and interpreted by philosophers and scholars both within and outside the Hindu tradition.",
      image: "https://i.pinimg.com/236x/f9/47/9e/f9479ef4ae592edbef276806b5cd67d8.jpg"
    },
    {
      year: "1526 CE",
      event: "The Mughal Empire",
      description: "The Mughal Empire, one of the largest and most powerful empires in Indian history, was established by Babur and reached its peak under the reign of Akbar the Great.",
      details: "The Mughal Empire was known for its architectural achievements, such as the Taj Mahal, as well as its patronage of the arts, literature, and science. The Mughals also sought to integrate Hindu and Muslim traditions, leading to a period of cultural synthesis.",
      impact: "The Mughal Empire had a lasting impact on Indian culture, with the introduction of new architectural styles, cuisines, and the blending of Islamic and Hindu traditions. This period also saw the further development of syncretic religious movements, such as the Bhakti and Sufi traditions.",
      image: "https://i.pinimg.com/736x/4d/19/fe/4d19fe96051c7b2c2e07aee2b098638a.jpg"
    },
    {
      year: "1857 CE",
      event: "The Indian Rebellion against British Rule",
      description: "The Indian Rebellion of 1857, also known as the First War of Indian Independence, was a major uprising against the British East India Company's rule in India.",
      details: "The rebellion was sparked by a variety of factors, including resentment towards the imposition of British rule, the exploitation of Indian resources, and the perceived threat to traditional Hindu and Muslim religious practices.",
      impact: "The Indian Rebellion of 1857 was a significant event in the history of India's struggle for independence from British colonial rule. Although the rebellion was ultimately suppressed, it paved the way for the eventual independence of India in 1947 and the establishment of the Republic of India.",
      image: "https://i.pinimg.com/564x/1d/08/f0/1d08f0e9744b9907b74449552e7252eb.jpg"
    },
    {
      year: "1947 CE",
      event: "The Independence of India",
      description: "After decades of struggle and resistance, India gained its independence from British rule in 1947, leading to the establishment of the Republic of India.",
      details: "The Indian independence movement, led by figures such as Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose, employed a variety of strategies, including non-violent civil disobedience, to achieve their goal of self-rule.",
      impact: "The independence of India marked a pivotal moment in world history, as it represented the end of the British Empire and the emergence of a new, democratic nation-state. The transition to independence was accompanied by significant challenges, including the partition of India and Pakistan, but it also paved the way for the preservation and continued evolution of India's rich cultural and religious heritage.",
      image: "https://i.pinimg.com/564x/94/ed/71/94ed710238b98591a1bbf93b6c96fc95.jpg"
    },
    {
      year: "2000 CE",
      event: "The Globalization and Westernization of Indian Culture",
      description: "In the 21st century, India has experienced a growing influence of Western culture, with the increasing spread of global media, consumer products, and lifestyle trends.",
      details: "The process of globalization and Westernization has had a significant impact on Indian society, leading to a mix of cultural influences and the adoption of certain Western values and practices. This has resulted in both opportunities and challenges for the preservation of traditional Indian cultural and religious identities.",
      impact: "The Western influence on Indian culture has been a subject of ongoing debate and discussion. While some aspects of Western culture, such as technological advancements and certain social values, have been widely accepted, there has also been a backlash against the perceived erosion of traditional Indian values and practices. This has led to a renewed emphasis on the preservation and revitalization of Sanatan Dharma and Indian cultural heritage.",
      image: "https://i.pinimg.com/564x/a5/ed/09/a5ed09917dedc6017cf98a102daa6a78.jpg"
    },
    {
      year: "2024 CE",
      event: "The Continued Significance of Sanatan Dharma",
      description: "In the present day, the principles and traditions of Sanatan Dharma, the eternal and ancient Hindu spiritual and philosophical tradition, continue to shape Indian culture, society, and identity.",
      details: "Sanatan Dharma encompasses a diverse range of beliefs, practices, and traditions, including the Vedas, the Upanishads, the Bhagavad Gita, and the various Hindu deities and festivals. It continues to be a source of inspiration and guidance for millions of people in India and around the world.",
      impact: "The enduring relevance of Sanatan Dharma in the modern era is a testament to the resilience and adaptability of Indian civilization. As India navigates the challenges of globalization and modernization, the principles and teachings of Sanatan Dharma remain a vital part of the country's cultural and spiritual landscape, shaping its values, traditions, and collective identity.",
      image: "https://i.pinimg.com/564x/94/ed/71/94ed710238b98591a1bbf93b6c96fc95.jpg"
    },
    {
      year: "2000 CE",
      event: "The Globalization and Westernization of Indian Culture",
      description: "In the 21st century, India has experienced a growing influence of Western culture, with the increasing spread of global media, consumer products, and lifestyle trends.",
      details: "The process of globalization and Westernization has had a significant impact on Indian society, leading to a mix of cultural influences and the adoption of certain Western values and practices. This has resulted in both opportunities and challenges for the preservation of traditional Indian cultural and religious identities.",
      impact: "The Western influence on Indian culture has been a subject of ongoing debate and discussion. While some aspects of Western culture, such as technological advancements and certain social values, have been widely accepted, there has also been a backlash against the perceived erosion of traditional Indian values and practices. This has led to a renewed emphasis on the preservation and revitalization of Sanatan Dharma and Indian cultural heritage.",
      image: "https://i.pinimg.com/564x/a5/ed/09/a5ed09917dedc6017cf98a102daa6a78.jpg"
    },
    {
      year: "3000 BCE",
      event: "Indus Valley Civilization",
      description: "One of the world's oldest urban civilizations flourishes in the Indian subcontinent.",
      details: "The Indus Valley Civilization, also known as the Harappan Civilization, was an advanced Bronze Age society. It was characterized by its sophisticated urban planning, advanced drainage systems, and standardized weights and measures.",
      impact: "This civilization laid the foundation for many aspects of Indian culture and technology, including agriculture, metallurgy, and possibly yoga and meditation practices.",
      image: "https://i.pinimg.com/564x/a5/ed/09/a5ed09917dedc6017cf98a102daa6a78.jpg",
    },
    {
      year: "1500 BCE",
      event: "Composition of the Vedas",
      description: "The oldest known Sanskrit texts, forming the basis of Hindu philosophy, are composed.",
      details: "The Vedas are a large body of religious texts originating in ancient India. They are the oldest layer of Sanskrit literature and the oldest Hindu texts.",
      impact: "The Vedas have been hugely influential in shaping Hindu thought and practice, and have also influenced Buddhism and Jainism.",
      image: "https://i.pinimg.com/564x/1d/08/f0/1d08f0e9744b9907b74449552e7252eb.jpg",
    },
    // ... (other timeline events)
  ];

  const randomTopics = [
    "The Symbolism of the Lotus in Hinduism",
    "The Role of Karma in Sanatan Dharma",
    "Understanding the Concept of Dharma",
    "The Significance of the Om Symbol",
    "Exploring the Seven Chakras",
    "The Philosophy of Advaita Vedanta",
    "The Importance of Bhakti Yoga",
    "Decoding the Symbolism in Hindu Temples",
    "The Role of Astrology in Hindu Culture",
    "Understanding the Four Yugas (Ages) in Hinduism"
  ];


  useEffect(() => {
    setRandomTopic(randomTopics[Math.floor(Math.random() * randomTopics.length)]);
  }, [activeTab]);

  const handleSuggestionSubmit = () => {
    if (newSuggestion.trim() !== '') {
      setSuggestions([
        ...suggestions,
        { id: suggestions.length + 1, text: newSuggestion, likes: 0, comments: [] },
      ]);
      setNewSuggestion('');
    }
  };

  const handleLikeSuggestion = (id) => {
    setSuggestions(
      suggestions.map((suggestion) =>
        suggestion.id === id
          ? { ...suggestion, likes: suggestion.likes + 1 }
          : suggestion
      )
    );
  };

  const handleCommentSuggestion = (id, comment) => {
    setSuggestions(
      suggestions.map((suggestion) =>
        suggestion.id === id
          ? {
              ...suggestion,
              comments: [...suggestion.comments, { text: comment }],
            }
          : suggestion
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-purple-200 p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-800 animate-pulse">
        Discover India's Cultural Heritage
      </h1>
      
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <nav className="flex justify-around p-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-lg transform scale-105'
                  : 'text-white hover:bg-indigo-500'
              }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 md:p-8">

        {activeTab === 'community' && (
  <div className="space-y-8 animate-fadeIn">
    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Community Discussions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {communityPosts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">{post.title}</h3>
            <p className="text-gray-700 text-base mb-4">{post.scientificReason}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaUser className="text-indigo-500 mr-2" />
                <span className="text-sm text-gray-600">Posted by {post.famous}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center text-indigo-500 hover:text-indigo-700">
                  <FaYoutube className="mr-1" />
                  <span>Watch</span>
                </button>
                <button className="flex items-center text-indigo-500 hover:text-indigo-700">
                  <FaComments className="mr-1" />
                  <span>24</span>
                </button>
                <button className="flex items-center text-red-500 hover:text-red-700">
                  <FaHeart className="mr-1" />
                  <span>98</span>
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-base">{post.significance}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

          {activeTab === 'recipes' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Sacred Recipes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.map((recipe, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                      <p className="text-gray-700 text-base mb-4">{recipe.description}</p>
                      <button 
                        onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
                        className="mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
                      >
                        {expandedRecipe === index ? 'Read Less' : 'Read More'}
                        {expandedRecipe === index ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                      </button>
                      {expandedRecipe === index && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                          <h4 className="font-semibold text-indigo-600">Festival: {recipe.festival}</h4>
                          <p><strong>Popularity:</strong> {recipe.popularity}</p>
                          <p><strong>Story:</strong> {recipe.story}</p>
                          <h4 className="font-semibold text-indigo-600">Recipe:</h4>
                          <p>{recipe.recipe}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Festival Calendar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{event.name}</h3>
                      <p className="text-gray-700 text-base mb-2"><strong>Date:</strong> {event.date}</p>
                      <p className="text-gray-700 text-base mb-4">{event.significance}</p>
                      <button 
                        onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                        className="mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
                      >
                       {expandedEvent === index ? 'Read Less' : 'Read More'}
                        {expandedEvent === index ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                      </button>
                      {expandedEvent === index && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                          <p><strong>Celebrations:</strong> {event.celebrations}</p>
                          <p><strong>Locations:</strong> {event.locations}</p>
                          <p><strong>Attendance:</strong> {event.attendance}</p>
                          <p><strong>Story:</strong> {event.story}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Journey Through Indian History</h2>
              <div className="relative">
                <div className="absolute h-full w-1 bg-indigo-200 left-1/2 transform -translate-x-1/2"></div>
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                    </div>
                    <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <h3 className="mb-3 font-bold text-indigo-600 text-xl">{event.year}</h3>
                      <h4 className="mb-3 font-bold text-lg">{event.event}</h4>
                      <p className="text-sm leading-snug tracking-wide text-gray-700 text-opacity-100">{event.description}</p>
                      <button 
                        onClick={() => setExpandedTimeline(expandedTimeline === index ? null : index)}
                        className="mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      >
                        {expandedTimeline === index ? 'Read Less' : 'Read More'}
                      </button>
                      {expandedTimeline === index && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                          <img src={event.image} alt={event.event} className="w-full h-48 object-cover rounded-lg" />
                          <h4 className="font-semibold text-indigo-600">Details</h4>
                          <p>{event.details}</p>
                          <h4 className="font-semibold text-indigo-600">Impact</h4>
                          <p>{event.impact}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Test Your Knowledge</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{quizQuestions[currentQuestion].question}</h3>
                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setShowAnswer(true)}
                      className="w-full text-left p-4 rounded-lg bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {showAnswer && (
                  <div className="mt-6 p-4 bg-green-100 rounded-lg">
                    <p className="font-bold text-green-800">Correct Answer: {quizQuestions[currentQuestion].correctAnswer}</p>
                  </div>
                )}
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => {
                      setCurrentQuestion(Math.max(0, currentQuestion - 1));
                      setShowAnswer(false);
                    }}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300"
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      setCurrentQuestion(Math.min(quizQuestions.length - 1, currentQuestion + 1));
                      setShowAnswer(false);
                    }}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300"
                    disabled={currentQuestion === quizQuestions.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'random' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Explore a Random Topic</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{randomTopic}</h3>
                <p className="text-gray-700 mb-4">Dive deep into this fascinating aspect of Indian culture and spirituality. Click the button below to learn more about this topic.</p>
                <button
                  onClick={() => setRandomTopic(randomTopics[Math.floor(Math.random() * randomTopics.length)])}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 flex items-center"
                >
                  <FaRandom className="mr-2" />
                  Explore Another Topic
                </button>
              </div>
            </div>
          )}
          {activeTab === 'suggestions' && (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">Share Your Suggestions</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Submit a Suggestion</h3>
            <div className="flex mb-4">
              <input
                type="text"
                value={newSuggestion}
                onChange={(e) => setNewSuggestion(e.target.value)}
                placeholder="Enter your suggestion here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSuggestionSubmit}
                className="px-4 py-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="bg-indigo-100 rounded-lg p-4 flex justify-between items-center"
                >
                  <p>{suggestion.text}</p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLikeSuggestion(suggestion.id)}
                      className="flex items-center text-indigo-500 hover:text-indigo-700"
                    >
                      <FaHeart className="mr-1" />
                      <span>{suggestion.likes}</span>
                    </button>
                    <button
                      onClick={() =>
                        handleCommentSuggestion(
                          suggestion.id,
                          prompt('Enter your comment:')
                        )
                      }
                      className="flex items-center text-indigo-500 hover:text-indigo-700"
                    >
                      <FaComments className="mr-1" />
                      <span>{suggestion.comments.length}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-600">
        <p>© 2024 Cultural Exploration Platform. All rights reserved.</p>
        <p className="mt-2">Dedicated to preserving and sharing the rich heritage of Sanatan Dharma.</p>
      </footer>
    </div>
  );
};

export default CulturalExplorationPlatform;