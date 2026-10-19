---
title: "Showcasing SURF at Our Graduation Exhibition"
excerpt: "Finally presenting SURF at the graduation exhibition."
publishDate: "October 19, 2026"
tags: ["Exhibition", "Project", "Security"]
isFeatured: true
seo:
  image:
    src: '../../assets/images/post5-2.jpeg'
---

On October 15th, our team presented our graduation project, **SURF**, at the graduation exhibition of the Division of Artificial Intelligence Engineering at Sookmyung Women's University. After months of designing, building, and debugging, it felt surreal to finally see our work on display for everyone to try.

## 🌊 What is SURF?

SURF is a real-time DGA (Domain Generation Algorithm) detection system. Malware often uses DGAs to generate thousands of random-looking domains to reach its command-and-control servers, which makes traditional blocklists hard to keep up to date.

To tackle this, we deployed our **DRIFT** model directly at the DNS layer, so suspicious domains can be detected and blocked before a connection is ever made. We also built a **browser extension** that shows users which domains were blocked and why, and lets them manage those AI-based decisions while they browse.

* **Detection:** DRIFT model served on top of Unbound DNS
* **Backend:** Flask + Redis for fast inference and caching
* **Monitoring:** Prometheus for tracking query and detection metrics
* **User Side:** A browser extension for transparent, user-controllable blocking

## 🛠️ The Road to the Exhibition

Preparing for the exhibition was a project of its own. It was my first time ever building a DNS server, so even getting queries to resolve correctly and pass through our detection pipeline took a lot of trial and error.

The demo setup brought its own challenges. To let visitors experience SURF firsthand, we had to configure a dedicated Wi-Fi network that routed all DNS traffic through our server. On top of that, personalizing the blocklist so that each user's allow and block decisions applied only to their own device turned out to be much trickier than we expected.

We also spent a lot of time on the poster and the live demo, trying to make a fairly technical topic approachable for visitors without a security background.

## 🖼️ Poster

Here is the poster we prepared for the exhibition.

<div style="display: flex; justify-content: center; margin-bottom: 50px;">
  <img src="/post/5/poster.png" alt="SURF exhibition poster" style="max-width: 100%; max-height: 800px; width: auto; border-radius: 12px; object-fit: contain;" />
</div>

## 📸 Exhibition Day

Some snapshots from the day of the exhibition:

<div style="
  display: flex; 
  gap: 12px; 
  overflow-x: auto; 
  scroll-snap-type: x mandatory; 
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 50px;
">
  <img src="/post/5/post5-1.jpeg" alt="Exhibition Day 1" style="scroll-snap-align: start; height: 400px; width: auto; border-radius: 12px; object-fit: contain; shrink-0;" />
  <img src="/post/5/post5-2.jpeg" alt="Exhibition Day 2" style="scroll-snap-align: start; height: 400px; width: auto; border-radius: 12px; object-fit: contain; shrink-0;" />
  <img src="/post/5/post5-3.jpg" alt="Exhibition Day 3" style="scroll-snap-align: start; height: 400px; width: auto; border-radius: 12px; object-fit: contain; shrink-0;" />
  <img src="/post/5/post5-4.jpeg" alt="Exhibition Day 4" style="scroll-snap-align: start; height: 400px; width: auto; border-radius: 12px; object-fit: contain; shrink-0;" />
  <img src="/post/5/post5-5.jpeg" alt="Exhibition Day 5" style="scroll-snap-align: start; height: 400px; width: auto; border-radius: 12px; object-fit: contain; shrink-0;" />
</div>

## Wrapping up

Looking back, SURF was more than a graduation requirement. It was where the research I had been doing at SNSec Lab met a real, usable system, and it taught me how much effort it takes to turn a model into something people can actually trust and use.

Back in my sophomore year, I helped prepare the graduation exhibition as a member of the student council. I remember watching the seniors present their work and wondering, *"Will that day ever come for me, too?"* Now, somehow, I'm already a senior who has presented at and safely wrapped up my own graduation exhibition. It feels truly special to have come full circle.

I'm deeply grateful to my advisor, Professor Seonghoon Jeong, and to my lovely teammate, Chaeyoung, for building this with me. Although I haven't officially graduated yet, I also want to thank everyone who congratulated me along the way. I'll do my best to finish strong with my graduation thesis! 🌊✨
