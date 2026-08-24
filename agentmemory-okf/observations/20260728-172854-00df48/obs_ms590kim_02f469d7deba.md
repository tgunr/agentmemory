---
type: CommandRun
title: Audiostreaming Audio in SwiftUI
description: No relevant context provided
resource: agentmemory://observation/obs_ms590kim_02f469d7deba
tags: ["AVAudioPlayer", "AVSpeechSynthesizer", "iOS", "commandrun"]
timestamp: 2026-07-28T22:49:49.530980+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 8
confidence: 0.9
---
# Summary

$0 wrote "import Foundation\nimport AVFoundation\n\n@available(iOS 17.0, *)\nfinal class AudioManager: ObservableObject {\n\n    // MARK: - Tone Frequencies per Phase (Hz, sine wave)\n    static let toneFrequencies: [BreathPhase: Double] = [\n        .inhale:    396,  // G3\n        .retain:    528,  // C5\n        .exhale:    285,  // F3\n        .emptyHold: 174,  // D2\n    ]\n\n    private var tonePlayer: AVAudioPlayer?\n    private(set) var speechSynthesizer: AVSpeechSynthesizer\n\n    init() {\n        speechSynthesizer = AVSpeechSynthesizer()\n        setupAudioSession()\n    }\n\n    // MARK: - Tone Playback\n\n    func playTone(for phase: BreathPhase, duration: TimeInterval = 1.5) {\n        guard let freq = Self.toneFrequencies[phase] else { return }\n        stopTone()\n        do {\n            let url = try generateToneURL(\n                frequency: freq,\n                duration: duration\n            )\n            tonePlayer = try AVAudioPlayer(contentsOf: url)\n            tonePlayer?.prepareToPlay()\n            tonePlayer?.play()\n        } catch {\n            print(\"VoidBreath tone error: \\(error)\")\n        }\n    }\n\n    func stopTone() {\n        tonePlayer?.stop()\n        tonePlayer = nil\n    }\n\n    // MARK: - Voice Guide\n\n    func speak(_ text: String) {\n        let utterance = AVSpeechUtterance(string: text)\n        utterance.rate = 0.5\n        utterance.volume = 1.0\n        speechSynthesizer.speak(utterance)\n    }\n\n    func stopSpeaking() {\n        speechSynthesizer.stopSpeaking(at: .immediate)\n    }\n\n    // MARK: - Private\n\n    private func setupAudioSession() {\n        do {\n            try AVAudioSession.sharedInstance().setCategory(.ambient)\n            try AVAudioSession.sharedInstance().setActive(true)\n        } catch {\n            print(\"VoidBreath audio session error: \\(error)\")\n        }\n    }\n\n    private func generateToneURL(\n        frequency: Double,\n        duration: TimeInterval\n    ) throws -> URL {\n        let sampleRate: Double = 44100\n        let totalFrames = Int(sampleRate * duration)\n        let settings: [String: Any] = [\n            AVFormatIDKey: kAudioFormatMPEG4AAC,\n            AVSampleRateKey: sampleRate,\n            AVNumberOfChannelsKey: 1,\n            AVEncoderAudioQualityKey: AVAudioQuality.low.rawValue,\n        ]\n\n        let url = URL(\n            fileURLWithPath: NSTemporaryDirectory()\n        ).appendingPathComponent(\n            \"tone_\\(Int(frequency))_\\(Int(duration * 1000)).m4a\"\n        )\n\n        let converter = AVAudioConverter(\n            from: AVAudioFormat(\n                commonFormat: .pcmFormatFloat32,\n                sampleRate: sampleRate,\n                channels: 1,\n                interleaved: false\n            )!,\n            to: AVAudioFormat(settings: settings)!\n        )!\n\n        let inputBuffer = AVAudioPCMBuffer(\n            pcmFormat: converter.inputFormat,\n            frameCapacity: AVAudioFrameCount(totalFrames)\n        )!\n        inputBuffer.frameLength = AVAudioFrameCount(totalFrames)\n\n        let channelData = inputBuffer.floatChannelData![0]\n        for i in 0..<totalFrames {\n            let t = Float64(i) / sampleRate\n            channelData[i] = Float(sin(2 * .pi * frequency * t) * 0.3)\n        }\n\n        var error: NSError?\n        let outputBuffer = AVAudioPCMBuffer(\n            pcmFormat: converter.outputFormat,\n            frameCapacity: AVAudioFrameCount(totalFrames)\n        )!\n\n        let inputBlock: AVAudioConverterInputBlock = { _, outStatus in\n            outStatus.pointee = .haveData\n            return inputBuffer\n        }\n\n        try converter.convert(\n            to: outputBuffer,\n            error: &error,\n            withInputFrom: inputBlock\n        )\n\n        if let error = error {\n            throw error\n        }\n\n        let audioData = outputBuffer.audioBufferList.pointee.mBuffers\n        </fact>

## Facts
- The bytes written to disk were 4037.
- The dirs_created flag was set to true, indicating a new directory was created.

## Concepts
- AVAudioPlayer
- AVSpeechSynthesizer
- iOS

## Files
- `/Volumes/projects/VoidBreath/Sources/iOS/AudioManager.swift`

_Importance: 8 · Confidence: 0.9_
