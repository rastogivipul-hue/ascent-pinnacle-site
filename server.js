// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'newsletter_subscribers.json');

app.use(cors());
app.use(express.json());

// Initialize DB file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;

    // 1. Basic Validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    try {
        // 2. Read existing data
        const rawData = fs.readFileSync(DB_FILE);
        const subscribers = JSON.parse(rawData);

        // 3. Check for duplicates
        if (subscribers.find(sub => sub.email === email)) {
            return res.status(409).json({ message: 'You are already subscribed.' });
        }

        // 4. Add new subscriber
        const newSubscriber = {
            email,
            subscribedAt: new Date().toISOString(),
            source: 'insights_page'
        };
        
        subscribers.push(newSubscriber);

        // 5. Save to file
        fs.writeFileSync(DB_FILE, JSON.stringify(subscribers, null, 2));

        return res.status(200).json({ message: 'Success' });

    } catch (error) {
        console.error('Newsletter Error:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
