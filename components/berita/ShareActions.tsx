"use client";

import { useState } from "react";
import styles from "./Berita.module.css";

export function ShareActions({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => window.location.href;
  const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer,width=720,height=620");

  async function copyLink() {
    await navigator.clipboard.writeText(getUrl());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={styles.share} aria-label="Bagikan artikel">
      <span>Bagikan</span>
      <button type="button" onClick={copyLink}>{copied ? "Tautan disalin" : "Salin tautan"}</button>
      <button type="button" onClick={() => open(`https://wa.me/?text=${encodeURIComponent(`${title} ${getUrl()}`)}`)}>WhatsApp</button>
      <button type="button" onClick={() => open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`)}>X</button>
      <button type="button" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`)}>Facebook</button>
    </div>
  );
}
