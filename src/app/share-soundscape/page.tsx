'use client';

import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShareSoundscape() {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState(null);
  const [comments, setComments] = useState({});

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideos([...videos, { id: Date.now(), url: videoURL, likes: 0, comments: [] }]);
      toast.success('Video uploaded successfully!');
    }
  };

  const handleLike = (id) => {
    setVideos(videos.map((video) => (video.id === id ? { ...video, likes: video.likes + 1 } : video)));
  };

  const handleComment = (id, comment) => {
    setVideos(
      videos.map((video) => (video.id === id ? { ...video, comments: [...video.comments, comment] } : video))
    );
  };

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
    toast.success('Video deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-100 p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-900">Share Your Soundscape</h1>

      <div className="mb-8 text-center">
        <input type="file" accept="video/*" onChange={handleUpload} className="hidden" id="video-upload" />
        <label htmlFor="video-upload" className="bg-blue-500 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-700">
          Upload Video
        </label>
      </div>

      {/* Display Videos */}
      <div className="space-y-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md p-4">
            <video controls src={video.url} className="w-full mb-4 rounded-lg"></video>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <FaThumbsUp
                  onClick={() => handleLike(video.id)}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                />
                <span>{video.likes}</span>
                <FaCommentAlt className="text-orange-500" />
                <span>{video.comments.length}</span>
                <FaTrash
                  onClick={() => handleDelete(video.id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                />
              </div>
            </div>
            <CommentSection video={video} onComment={handleComment} />
          </div>
        ))}
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
}

function CommentSection({ video, onComment }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onComment(video.id, input);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          className="border p-2 rounded-md w-full mb-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Comment
        </button>
      </form>
      <ul>
        {video.comments.map((comment, index) => (
          <li key={index} className="border-b py-2">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
} 