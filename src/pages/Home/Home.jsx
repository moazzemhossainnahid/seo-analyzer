import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [url, setUrl] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) return alert('Please provide a valid URL');
        setLoading(true);

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/analyze',
                { url },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );
            console.log('Prediction result:', response.data); // Debug output
            setPrediction(response.data);
        } catch (error) {
            console.error('Error making prediction:', error);
            setPrediction(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Website URL Analysis</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Enter Website URL:</label>
                        <input
                            type="url"
                            value={url}
                            onChange={handleUrlChange}
                            placeholder="https://example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full ${loading ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary'
                            } text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300`}
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Analyze'}
                    </button>
                </form>

            </div>
            {prediction && (
                <div className="mt-6 p-4 w-full flex flex-col md:flex-row gap-5 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-green-800 rounded-lg">
                    <div className="w-full md:w-2/5 space-y-3">
                    <h2 className="text-2xl font-semibold">Analyzing Result:</h2>
                    <p className='text-lg'><strong>URL:</strong> <span className="text-red-700">{prediction?.url}</span></p>

                    <div className="pt-10">
                        <h3 className="text-xl font-semibold">Recommendations:</h3>
                        <ul className="list-disc list-inside pt-7">
                            <li className='space-y-3'>
                                <strong className='text-xl'>Performance:</strong>
                                <pre className="bg-gray-300 p-2 rounded-md whitespace-pre-wrap">{prediction.recommendations?.recommendations?.performance || 'No data'}</pre>
                            </li>
                        </ul>
                        
                        <div className="mt-4 bg-white rounded p-3">
                            <h3 className="text-xl font-semibold">Priority Counts:</h3>
                            <ul className="list-disc font-semibold list-inside pt-5">
                                <li>High: {prediction.recommendations?.priority_counts?.high || 0}</li>
                                <li>Medium: {prediction.recommendations?.priority_counts?.medium || 0}</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-3/5 space-y-3">
                        <ul className="list-disc list-inside space-y-3">
                            <li className='space-y-3'>
                                <strong className='text-xl'>Content:</strong>
                                <pre className="bg-gray-100 p-2 rounded-md whitespace-pre-wrap">{prediction.recommendations?.recommendations?.content || 'No data'}</pre>
                            </li>
                            <li className='space-y-3'>
                                <strong className='text-xl'>Technical:</strong>
                                <pre className="bg-gray-100 p-2 rounded-md whitespace-pre-wrap">{prediction.recommendations?.recommendations?.technical || 'No data'}</pre>
                            </li>
                        </ul>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
