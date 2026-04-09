# ⏱️ Timebox

> **🚀 Deployed Website:** [https://nitish-17.github.io/Timebox-v2/](https://nitish-17.github.io/Timebox-v2/)

## 📖 About the Project

A minimalist personal time-boxing application inspired by [timebox.so](https://www.timebox.so/). Designed with a local-first philosophy, the app ensures all your data remains private and is stored securely within your browser.

## ✨ Features

- **Daily Planning:** Effortlessly add tasks and notes for every day.
- **Rapid Scheduling:** Quickly schedule tasks on the calendar for efficient time-boxing and time-blocking.
- **Data Portability:** Built-in Export and Import functionality to save your data to a file, providing a backup whenever you need to clear your browser data.
- **AI-Powered Planning:** Works with local LLMs (LM Studio) for automated idea -> tasks, task -> notes(steps).
- **Enhanced UI:** Features an updated Solo Leveling-inspired UI.

## ⌨️ Keyboard Navigation

- **`/`** : Open the **Commands & Options** menu.
- **`T`** : Focus cursor on the **Today's Task** input.
- **`L`** : Focus cursor on the **Later Task** input.
- **`N`** : Focus cursor on the **Notes** input.
- **`Esc`** : Remove cursor focus or **Close** active popups/menus.

## 🤖 AI Commands & Customization

The AI features require **LM Studio** to be running locally. Use the `/` menu to access:

- **`expand task`** : Generates tasks based on the input you provide.
- **`brief task`** : Breaks a task down into smaller steps and pastes the output into your Notes.

### 🎛️ Fully Editable Payloads

1.  A window appears showing the **System Prompt** and the **Task Data**.
2.  **Modify Anything:** You can edit the system instructions to change how the AI responds.
3.  **Manual Override:** You can completely remove the task data and type a custom query.

## ⚙️ Local AI Setup (LM Studio)

Keep your data private by running your own models locally.

### 1. Install LM Studio

Download the client from [lmstudio.ai](https://lmstudio.ai/).

### 2. Download a Recommended Model

Recommended models based on your hardware(ram/gpu):

- `qwen/qwen3-4b-2507` (~4.3 GB)
- `gemma-4-e4b-it` (~9.0 GB)

### 3. Initialize the Server

1.  Navigate to the **Local Server** tab.
2.  Click **Start Server**.
3.  Click **+ Load Model** and select your chosen model.
4.  The application will connect via the default endpoint: `http://127.0.0.1:1234`.
