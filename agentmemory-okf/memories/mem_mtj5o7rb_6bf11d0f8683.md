---
type: Fact
title: # Export and Use CreateML

source: chatgpt
session_id: 58970773-7248-4a4a-94a7-6
description: # Export and Use CreateML

source: chatgpt
session_id: 58970773-7248-4a4a-94a7-6c9d83dd4979
resource: chatgpt://conversation/58970773-7248-4a4a-94a7-6c9d83dd4979

# Conversation

- **Session ID:** `58
resource: agentmemory://memory/mem_mtj5o7rb_6bf11d0f8683
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/58970773-7248-4a4a-94a7-6c9d83dd4979"]
timestamp: 2026-09-01T21:04:42.964Z
source: agentmemory
strength: 7
---
# Content

# Export and Use CreateML

source: chatgpt
session_id: 58970773-7248-4a4a-94a7-6c9d83dd4979
resource: chatgpt://conversation/58970773-7248-4a4a-94a7-6c9d83dd4979

# Conversation

- **Session ID:** `58970773-7248-4a4a-94a7-6c9d83dd4979`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-07-01T14:47:05.891930+00:00
- **Messages:** 46

---

### 👤 User

How can I use an existing dataset I created with CreateML on a roboflow project?

---

### 🤖 Assistant

Sure, I can guide you through the general process of using an existing dataset created with CreateML on a Roboflow project. I'll outline the steps here based on my knowledge up until September 2021, but please keep in mind that these steps might vary based on updates to the platforms or if your dataset has specific requirements.

1. **Export the CreateML dataset**: Firstly, you will need to export the dataset from CreateML in a format that can be used in Roboflow. Commonly, this might be in a format like a CSV file, JSON, or an image with corresponding annotation files in a format such as PASCAL VOC or COCO JSON. The specific steps to export your dataset would depend on how it's currently stored in CreateML.

2. **Prepare the dataset for Roboflow**: Depending on the format you exported in step 1, you may need to convert the dataset to a format that Roboflow can import. Roboflow supports a wide variety of formats, so you will need to check which formats are supported and potentially convert your dataset if needed.

3. **Upload the dataset to Roboflow**: Once your dataset is in a format that Roboflow can import, you can create a new project in Roboflow and upload your dataset. You will need to follow the steps provided by Roboflow to do this, which generally involve selecting the "Upload" button, choosing your dataset, and then waiting for the upload to complete.

4. **Configure the project**: After your dataset is uploaded, you can then configure your project, such as specifying your train/test/validation split, applying any preprocessing or augmentation steps, and setting any other project-specific settings.

5. **Train your model**: Once your project is set up, you can then train your model using Roboflow's training capabilities. This involves selecting the type of model you want to train, specifying any model-specific settings, and then starting the training process.

Please note, some of these steps might require specific instructions depending on the type of dataset you have, the format it's in, and what you're trying to achieve. If you provide more specific details, I could help you more precisely. If any of the steps are unclear or if you're unsure how to do something, let me know and I'll do my best to assist you.

---

### 👤 User

How do I use roboflow import to upload a dataset?

---

### 🤖 Assistant

Here is a general process of importing a dataset into Roboflow:

1. **Create a new project**: Login to your Roboflow account and click on the "Create Project" button. You will need to give your project a name and optionally a description.

2. **Upload your dataset**: Click on the "Upload Images" button. This will open a new window where you can select the files you want to upload. You can select files from your local machine or from a cloud storage service. 

3. **Choose format**: Once you have selected your files, you will need to select the format of your dataset. Roboflow supports a wide variety of formats such as YOLO Darknet, COCO JSON, TensorFlow CSV, etc. Select the format that matches your dataset. 

4. **Upload and process**: After selecting your files and the format, click on the "Upload" button. Roboflow will then upload your dataset and process it. This may take some time depending on the size of your dataset.

5. **Check and confirm**: Once the upload and processing are complete, you will see a summary of your dataset. You can check the details of your dataset, such as the number of images, the number of classes, etc. If everything looks good, click on the "Finish Upload" button. 

6. **Train/Test split**: After confirming your upload, you will need to specify how you want to split your dataset into training, validation,
