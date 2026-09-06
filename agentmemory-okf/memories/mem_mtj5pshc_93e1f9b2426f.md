---
type: Fact
title: # CoreML Object Detector Examples

source: chatgpt
session_id: 75f791a2-7eeb-437
description: # CoreML Object Detector Examples

source: chatgpt
session_id: 75f791a2-7eeb-4373-b373-d2d6ff1c2afa
resource: chatgpt://conversation/75f791a2-7eeb-4373-b373-d2d6ff1c2afa

# Conversation

- **Session I
resource: agentmemory://memory/mem_mtj5pshc_93e1f9b2426f
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/75f791a2-7eeb-4373-b373-d2d6ff1c2afa"]
timestamp: 2026-09-01T21:05:56.483Z
source: agentmemory
strength: 7
---
# Content

# CoreML Object Detector Examples

source: chatgpt
session_id: 75f791a2-7eeb-4373-b373-d2d6ff1c2afa
resource: chatgpt://conversation/75f791a2-7eeb-4373-b373-d2d6ff1c2afa

# Conversation

- **Session ID:** `75f791a2-7eeb-4373-b373-d2d6ff1c2afa`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-19T19:56:41.538246+00:00
- **Messages:** 6

---

### 👤 User

Are there any example, sample, or open source projects available that use Object Detector in CoreML?

---

### 🤖 Assistant

Here are some open-source projects that use Object Detector in CoreML:

1. **YOLOv5**: This project uses YOLOv5 in a pipeline of PyTorch > ONNX > CoreML > TFLite【7†source】.

2. **CoreML Models**: This is a collection of converted CoreML models【8†source】.

3. **ObjectDetection CoreML**: An example of running Object Detection using CoreML【9†source】.

4. **iOS CoreML YOLO**: This project is almost real-time object detection using Apple's CoreML and YOLO v1【10†source】.

5. **CoreMLPlayer**: A tool to try CoreML models on multiple images and videos easily and quickly【11†source】.

6. **InceptionVisionDemo**: An iOS11 demo application for dominant objects detection【12†source】.

7. **CaffeToCoreML**: An example of using Vision and CoreML frameworks for Object Detection in real-world iOS apps using .mlmodels given by Apple. The project uses a Caffe model for the Oxford 102 flower dataset, which was converted to a CoreML model using the coremltools python package【13†source】.

8. **iOS11 ObjectTrackDemo**: An object detect and track demo using the iOS 11 vision API【14†source】.

9. **iOS ObjectDetection**: Online object detection using iOS and YOLOv3【15†source】.

10. **CoreML and Vision with a Pre-Trained Deep Learning SSD Model**: This project shows how to use CoreML and Vision with a pre-trained deep learning SSD (Single Shot MultiBox Detector) model. The app can find the locations of several different types of objects in the image. The detections are described by bounding boxes, and for each bounding box, the model also predicts a class【16†source】.

These projects can serve as good starting points or references for your work with Object Detector in CoreML.

---

### 👤 User

From the CreateML docs it looks like to use Object Detector it needs a folder containing images and a _annotations.createml.json file. How does one create the json file? I see no reference to any tool or app that can assist in defing the attributes.

---

### 🤖 Assistant

To use the Object Detector in CreateML, you need a folder containing your images and an associated `_annotations.createml.json` file. This JSON file provides the "ground truth" labels for your data that the model will be trained on. 

The `_annotations.createml.json` file contains a dictionary where the keys are the names of the images in your dataset and the values are the annotations for each image. Each annotation includes the label and the coordinates of the bounding box for each object in the image.

The structure of the JSON file looks something like this:

```json
{
    "image1.jpg": [
        {
            "label": "cat",
            "coordinates": {
                "x": 100,
                "y": 100,
                "width": 200,
                "height": 200
            }
        },
        // more objects...
    ],
    "image2.jpg": [
        // objects...
    ],
    // more images...
}
```

To create this file, you would typically use a tool or app that allows you to draw bounding boxes around objects in an image and assign labels to those objects. There are many such tools available, including:

1. **Labelbox**: This is a commercial tool that supports bounding box annotations and can export to JSON format. 

2. **VGG Image Annotator (VIA)**: This is a free, open-source tool developed by the Visual Geometry Group at the University of Oxford.

3. **RectLabel**: This is a commercial tool specifically for Mac that supports bounding box annotations and can export to the CreateML JSON format directly.

4. **LabelImg**: This is an open-source graphical image annotation tool written in Python and Qt. It supports PascalVOC and YOLO formats, which can then be converted to the CreateML JSON
