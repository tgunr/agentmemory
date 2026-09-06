---
type: Fact
title: # ISO/SAE Screw Standards

source: chatgpt
session_id: 7d7b8824-fc7d-4abf-89f6-b
description: # ISO/SAE Screw Standards

source: chatgpt
session_id: 7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd
resource: chatgpt://conversation/7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd

# Conversation

- **Session ID:** `7d
resource: agentmemory://memory/mem_mtj5oqp0_021a9b7b6622
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd"]
timestamp: 2026-09-01T21:05:07.492Z
source: agentmemory
strength: 7
---
# Content

# ISO/SAE Screw Standards

source: chatgpt
session_id: 7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd
resource: chatgpt://conversation/7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd

# Conversation

- **Session ID:** `7d7b8824-fc7d-4abf-89f6-b92ce9c4d0fd`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-24T14:27:20.732389+00:00
- **Messages:** 8

---

### 👤 User

Display  ISO and SAE handbooks or catalogues for screws. Nuts, and bolts

---

### 🤖 Assistant

The ISO and SAE both have handbooks or standards manuals that cover screws, nuts, and bolts:

1. The **ISO Standards Handbook - Fasteners and Screw Threads** gathers together more than 150 International Standards relating to fasteners and screw threads. It includes standards for terminology, nomenclature, and other general reference standards, such as those for technical drawings for screw threads and threaded parts. The second volume of the handbook contains product standards for fasteners such as bolts, screws, nuts, washers, pins, and rivets【7†source】.

2. The **SAE Fastener Standards Manual** provides a comprehensive compilation of SAE Technical Reports dealing with fasteners and related topics. This manual contains 61 standards, including 6 revised standards. These standards cover a range of topics including bolts, nuts, rivets, screws, washers, mechanical and chemical requirements, decarburization, surface discontinuities, torque-tension procedures, protective coatings, steels, hardenability, and more【13†source】.

Please note that these are not free resources. You would need to purchase these handbooks or manuals to get access to the detailed information they contain.

---

### 👤 User

If I am viewing a web page of screws containing multiple images how can I scrape the images into a folder on macos

---

### 🤖 Assistant

As an AI developed by OpenAI, I don't have the ability to directly interact with your local file system to download and save images. However, I can guide you on how to do this manually:

1. **Download Images One-by-One:** This method is suitable if there are only a few images that you want to download.

   - Right-click on the image you want to download.
   - Click on "Save Image As...". 
   - A dialog box will open, allowing you to navigate to the folder where you want to save the image. 
   - Click "Save".

2. **Automated Image Download (Advanced):** If you're comfortable with programming, you can automate the process of downloading images from a webpage using Python and libraries such as Beautiful Soup and requests. Below is a basic example:

```python
import os
import requests
from bs4 import BeautifulSoup

# Make sure BeautifulSoup, requests are installed. If not install it by pip install beautifulsoup4 requests

def download_images(url, folder):
    try:
        os.mkdir(os.path.join(os.getcwd(), folder))
    except:
        pass
    os.chdir(os.path.join(os.getcwd(), folder))
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')
    images = soup.find_all('img')
    for image in images:
        name = image['alt']
        link = image['src']
        with open(name.replace(' ', '-').replace('/', '') + '.jpg', 'wb') as f:
            im = requests.get(link)
            f.write(im.content)
            print('Writing: ', name)

# The URL of the webpage you want to scrape
url = "http://example.com"

# The folder where you want to save the images
folder = "Download"

download_images(url, folder)
```

This script will download all images on the webpage to a specified folder.

Please note that you should always respect the terms of service of the website you're scraping, and you should never use web scraping tools to download copyrighted material or infringe on someone's privacy.

Also, not all images on a webpage might be useful or relevant for you, so you might need to add some filters or conditions in the script to only download the images you need.

For a more advanced and customizable approach, you may want to look into web scraping frameworks like Scrapy. 

Again, I want to stress that scraping content from websites should be done responsibly and in accordance with the site's robots.txt file and terms
