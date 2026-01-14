#!/bin/bash
# Quick start script for portfolio development

echo "🚀 Portfolio Development Setup"
echo "=============================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Please install Python 3.6+"
    exit 1
fi

echo "✅ Python found"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

echo "📁 Current directory: $(pwd)"
echo ""

# Ask user which port to use
echo "Select development server port:"
echo "1) Port 8000 (default)"
echo "2) Port 8001 (alternative)"
echo "3) Custom port"

read -p "Enter choice (1-3): " choice

case $choice in
    1)
        PORT=8000
        ;;
    2)
        PORT=8001
        ;;
    3)
        read -p "Enter port number: " PORT
        ;;
    *)
        echo "Invalid choice. Using port 8000"
        PORT=8000
        ;;
esac

echo ""
echo "🌐 Starting development server on port $PORT..."
echo ""
echo "📍 Open http://localhost:$PORT in your browser"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start server
python3 -m http.server $PORT
