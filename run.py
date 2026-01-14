#!/usr/bin/env python3
"""
Portfolio Development Server
Starts a local HTTP server for portfolio development
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

def main():
    # Set the project directory
    project_dir = Path(__file__).parent
    os.chdir(project_dir)
    
    print("🚀 Portfolio Development Setup")
    print("=" * 40)
    print("")
    
    # Get port from user
    print("Select development server port:")
    print("1) Port 8000 (default)")
    print("2) Port 8001 (alternative)")
    print("3) Custom port")
    print("")
    
    choice = input("Enter choice (1-3): ").strip()
    
    if choice == "1":
        port = 8000
    elif choice == "2":
        port = 8001
    elif choice == "3":
        try:
            port = int(input("Enter port number: ").strip())
        except ValueError:
            print("Invalid port number. Using 8000")
            port = 8000
    else:
        print("Invalid choice. Using port 8000")
        port = 8000
    
    print("")
    print(f"🌐 Starting development server on port {port}...")
    print("")
    print(f"📍 Open http://localhost:{port} in your browser")
    print("")
    print("Press Ctrl+C to stop the server")
    print("")
    
    # Create HTTP server
    handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            # Try to open browser automatically
            try:
                webbrowser.open(f"http://localhost:{port}")
            except:
                pass
            
            print(f"✅ Server running on http://localhost:{port}")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Address already in use
            print(f"❌ Port {port} is already in use. Try another port.")
            sys.exit(1)
        else:
            raise
    except KeyboardInterrupt:
        print("\n\n✋ Server stopped")
        sys.exit(0)

if __name__ == "__main__":
    main()
