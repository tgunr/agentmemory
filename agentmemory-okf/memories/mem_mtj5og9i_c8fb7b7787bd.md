---
type: Fact
title: # Copy Partition Map: Debian 11

source: chatgpt
session_id: e817022f-0265-4f92-
description: # Copy Partition Map: Debian 11

source: chatgpt
session_id: e817022f-0265-4f92-927c-db4f1a7f73ee
resource: chatgpt://conversation/e817022f-0265-4f92-927c-db4f1a7f73ee

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj5og9i_c8fb7b7787bd
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/e817022f-0265-4f92-927c-db4f1a7f73ee"]
timestamp: 2026-09-01T21:04:53.998Z
source: agentmemory
strength: 7
---
# Content

# Copy Partition Map: Debian 11

source: chatgpt
session_id: e817022f-0265-4f92-927c-db4f1a7f73ee
resource: chatgpt://conversation/e817022f-0265-4f92-927c-db4f1a7f73ee

# Conversation

- **Session ID:** `e817022f-0265-4f92-927c-db4f1a7f73ee`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-17T16:51:20.858685+00:00
- **Messages:** 16

---

### 👤 User

How copy partition map from /dev/sdt to /dev/sdd in debian 11

---

### 🤖 Assistant

To copy a partition map from `/dev/sdt` to `/dev/sdd` in Debian 11, you can use the `sfdisk` command. Follow the steps below:

1. Open a terminal or SSH session on your Debian 11 system.

2. Make sure you have the necessary privileges to perform the task. Either log in as root or use the `sudo` command for the following steps.

3. First, check the partition table of `/dev/sdt` to confirm the existing partition layout. Run the command:

   ```shell
   sudo sfdisk -d /dev/sdt > partition_map.txt
   ```

   This command dumps the partition table of `/dev/sdt` to a file called `partition_map.txt`.

4. Now, you can restore the partition map from `partition_map.txt` to `/dev/sdd`. Run the command:

   ```shell
   sudo sfdisk --no-reread /dev/sdd < partition_map.txt
   ```

   This command writes the partition map from `partition_map.txt` to `/dev/sdd`. The `--no-reread` option ensures that the kernel doesn't read the partition table after writing.

5. After copying the partition map, you may need to reboot or reload the partition table for the changes to take effect. You can run the following command to reload the partition table:

   ```shell
   sudo partprobe /dev/sdd
   ```

   This command informs the kernel to update the partition table for `/dev/sdd`.

Please exercise caution when working with partition tables, as any mistakes or incorrect operations can result in data loss. Make sure you have backups of important data before proceeding.

---

### 👤 User

need to chaange the uuid also

---

### 🤖 Assistant

To change the UUID of a partition while copying the partition map from `/dev/sdt` to `/dev/sdd` in Debian 11, you can follow these steps:

1. Open a terminal or SSH session on your Debian 11 system.

2. Ensure that you have the necessary privileges to perform the task. Either log in as root or use the `sudo` command for the following steps.

3. First, check the partition table of `/dev/sdt` to confirm the existing partition layout and UUIDs. Run the command:

   ```shell
   sudo sfdisk -d /dev/sdt > partition_map.txt
   ```

   This command will dump the partition table of `/dev/sdt` to a file called `partition_map.txt`.

4. Edit the `partition_map.txt` file using a text editor such as `nano` or `vi`. Locate the line that corresponds to the partition you want to copy and change the UUID value to a new unique UUID. UUIDs are typically represented as a string of hexadecimal characters separated by hyphens. Modify the line to look like this:

   ```
   /dev/sdd1 : UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   ```

   Replace `"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` with the new UUID you want to assign to the partition.

5. Save the changes and exit the text editor.

6. Now, you can restore the partition map from `partition_map.txt` to `/dev/sdd` and apply the new UUID. Run the command:

   ```shell
   sudo sfdisk --no-reread /dev/sdd < partition_map.txt
   ```

   This command will write the modified partition map from `partition_map.txt` to `/dev/sdd`, including the new UUID for the partition.

7. After copying the partition map and changing the UUID, you may need to reboot or reload the partition table for the changes to take effect. You can run the following command to reload the partition table:

   ```shell
   sudo partprobe /dev/sdd
   ```

   This command informs the kernel to update the partition table for `/dev/sdd`.

Make sure to exercise caution when modifying partition tables and changing UUIDs, as incorrect operations can result in data loss. It's always a good practice to have backups of important data before making any changes.

---

### 👤 User

how to convert to uppercase in vi

---

### 🤖 Assistant

To convert text to uppercase in the vi te
