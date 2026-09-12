import { ResourceCollection } from '@/components/studio/ResourceCollection';
import React, { useState } from 'react';
import {
  Target, BookOpen, ArrowLeft, FileText, Users, Star, Search, Filter, HardDrive, Download, Clock, Eye, ExternalLink, ChevronRight, Zap
} from 'lucide-react';

// Type definitions based on usage
interface Resource {
  id: string;
  title: string;
  description: string;
  format: string;
  downloadLink: string;
  previewAvailable: boolean;
  rating: number;
  downloads: number;
  difficulty: string;
  tags: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgPattern: string;
  resourceCount: number;
  resources: Resource[];
}

// Move this to the top level and export it
export const categories: Category[] = [
        {
          id: "Tarjma-Tul-Quran",
          title: "Tarjma Tul Quran",
          description: "Notes and resources for Tarjma Tul Quran Class 10 including Surah notes and Quranic recitation.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 10,
          resources: [
            {
              id: "tarjma-1",
              title: "Surah Inam",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/D0BG3TZT#qikcbXPd3qG6B0sBpO0RtuZNSZrYlVup2mE4m1Fqfl4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-2",
              title: "Surah Araaf",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/upoCDCra#K8JdWq5xfVUqReNDOHqQP21e7BbDt2SkusDEWqwP20Y",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-3",
              title: "Surah Yunus",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/W4x3gQ4Y#7xYdhYCi2QnPk1ND6MqwBCJzgLH-qVL7-trwXVSa3f4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-4",
              title: "Surah Hood",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/r4BFiL4Q#aAxfnT4d_8gBkW9OPPufgKCq1LOAITQ43L_HiRzA-10",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-5",
              title: "Surah Ra'd",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vl4QxBCJ#P6KkojJSnsTif3M_rNSEGHe2tiXb7eCzArCip3zcwOw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },

              {
              id: "tarjma-6",
              title: "Surah Ibrahim",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/D1ZkFaIQ#wSm1uD6DbltO9viRh69zDih2Sb787POfS8_DO1L_luA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-7",
              title: "Surah Hijr",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/P0oyxJLT#9lvJR_zvJuD3NnJ3DE3VyFFaIeHJnDxTYeQNjB20vH8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
            },{
              id: "tarjma-8",
              title: "Surah Nahil",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/zlpnGSaT#TX5e2JP2dDKeg6zfI6jlLFcq3cdVaUvBVZmg8mxAT98",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
            },{
              id: "tarjma-9",
              title: "Surah Bani Israil",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/u0hDECKS#VhwhVhkXZnIQ3m73oHzPl5hhw3J3numHaJocC5dz0iA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
            },{
              id: "tarjma-9",
              title: "Surah Kahf",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/PhJXyYQR#rdnkpwKS-cjdW0l6dEkNwLV66Dq9fU7Fjm4H8B5OS0E",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-10",
              title: "Surah Al Momin",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3kQnEKzK#nHQD4OfnrkLgprJPOIs4megPOPYHgGpGto8uXA3v1v8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-11",
              title: "Surah Zumar",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z4AWVIgK#vkEMe3KaFhJGtgOcnmqSOf_gEuUS3AKB9-qniSxuCEw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-12",
              title: "Surah Hama Al Sajdha",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/akwmgQyS#vDtsSQVS1PVh1wLmSWkG7QuX9-8TnISgbfrl3Nij2VM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-13",
              title: "Surah Shura",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/btwDXZ5a#qdxNCDEzZU3o23DoEeZA7NSxhJaYkXBf_LNp8FJ8NPs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              }
          ]
        },
        {
          id: "islamiyat",
          title: "Islamiyat",
          description: "Notes and resources for Islamiyat.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 5,
            resources: [
                {
              id: "islamiyat-1",
              title: "Chapter 01",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/P15kzDQT#lV9vqxjcVabGa2bVkRjheOni-AbFNFyoxafvTdH-jh0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-2",
              title: "Chapter 02",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vkpygArL#hInY5XL_XK1MnzKZXjdasQCzRWwL_rfxtBvMt5WHWmQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-3",
              title: "Chapter 03",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/28IEHKga#pKKHTkUlGJX8PkKJZo3Lwr6acUJktVG0M1oX1eKCS8Y",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-4",
              title: "Chapter 04",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/alZVkYZL#YlX4n3U50MmQW_-6g-nbx1neKpP0njAt7q8jTqhDIzQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-5",
              title: "Chapter 05",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/i1wRyDaT#fjEUyh6sSZb5E8UlZGzLiboXF9_BWjj4vWC1yJXGe-s",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-6",
              title: "Chapter 06",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GoIxgLCC#LYYOMKcRNbtj37LY718SbV_lZfBvbdWWYCkdyMxPg7Q",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },
                {
              id: "islamiyat-7",
              title: "Chapter 07",
              description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/DxgSjAib#mt9i4JjPLnJ-36n42FOnUXMDdZvI6CFTFaWduHqciW8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran","Islamiyat"]
                },

          ]
        },
        {
          id: "urdu",
          title: "Urdu",
          description: "Notes and resources for Urdu.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 3,
            resources: [
                {
              id: "urdu-1",
              title: "Chapter 01",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/rsZyxJTY#78FVcjb87mh8wvIRrEkN5ls_a8pM4gte866lg_vKjZc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-2",
              title: "Chapter 02",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b1oTHajY#DPD1yfpXkHvE_Lbd12RqH36JHCya9MHQSWD8f99jmKU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-3",
              title: "Chapter 03",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/u5oxnTzB#lRisqwFPTxCcJJJTvAmggRUxyC4CCzenRfrRAER4Z8Y",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-4",
              title: "Chapter 04",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3xxyDaCR#qVSrhz7dJiFdYdDDVz9Opi-moF1dXQ2lP2Jbe1dwS4M",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-5",
              title: "Chapter 05",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Sx5HUZiY#J2uvWnjRuSYECdVVIyVe0xCP9b0VOJtZdsMd-_HLM6w",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-6",
              title: "Chapter 06",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2soBUSQQ#ImN5FQlNTQrZmerGyJeYr0a3K-PVQkftrhpJphw2mOU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-7",
              title: "Chapter 07",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vowwlYpb#vBuPObH8nVqi4vqhistDQ4Kh10AgMz_R-kqn2j6-ux0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-8",
              title: "Chapter 08",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/C9gC1L5b#QiBEYLJ9znuf1jo0EGGkLL6Y93ZpXwRrfNGnhMLYIcA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-9",
              title: "Chapter 09",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2hxFGD7C#1vJN0sUZ8ue8Sb0sIS1gmaHwY3TDD2l7afUDWwlecDM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-10",
              title: "Chapter 10",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/zwoXBbaQ#vHHwOX6GE7GUDThRATMQSJFOQ8ZdxpSx6ZVGF5vrRto",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-11",
              title: "Chapter 11",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/utBRlbbI#pSskZ-g2Vepl-sl-7YJPCtx_3zV1g06rzMtrzquW6wY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-12",
              title: "Chapter 12",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nswQjBoB#bbs_WCb5xIQTqTMw8CEVcaZfKYWqbG2jvWvaBclPT1A",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
              },
                {
              id: "urdu-13",
              title: "Chapter 13",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/n1IlFbSD#nipvHi6qy9naI3OMeb_l1t8J-xFq6qy8txrhDNMjRgM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-14",
              title: "Chapter 14",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WoAQXRxS#cbzz4lzfwc7MwG3Fi3vw5DHEMlHp70OtlU6j0swwcPs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-15",
              title: "Chapter 15",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Xw4TyQba#6yuy6BHbWhp9UOdpmkuHmNT3hYCSZuUleHAN4fZq-EE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-16",
              title: "Chapter 16",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/e44ChIwL#Kx2oBe9Yl3JCh_7fEkFrvDSsdfGSDNeuuP7z101qmPw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-17",
              title: "Chapter 17",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z45QFLpS#8zKB-3gccGJ1q_SUi3nJ70iWhAim78LFwMC4LXOvyPs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-18",
              title: "Chapter 18",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/iogRgDRQ#ypfdPoe5LRwiV4PIdnTNsaTu7QW555rwfc6MqCosUVg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-19",
              title: "Chapter 19",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/qkohDL7R#7GnWZBSH_gC2WUBEGxaWczDTqxJH2JTpk7UrU8nHCTE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-20",
              title: "Chapter 20",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GkQEGaAL#XtM67A7XH0neWXnMfzD803C4uAD9pFMx0wCqYNlaWSg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
              },
                {
              id: "urdu-21",
              title: "Chapter 21",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jwgXjARQ#_BnkJFRdjUMKQghXyjTuIQJ7a_qao57YeWdVWaANEbY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-22",
              title: "Chapter 22",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ux4FBJIZ#i3TAYGdqNRebdvOokHbK0xgiKKwokybVXDubj-2FD1A",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-23",
              title: "Chapter 23",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/How0EQYC#oBXwVmlI-JVjUQn2QxYWVPekNRdbJZLLW0XnwtujQ30",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-24",
              title: "Chapter 24",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mkIk2DjI#MzXFlF52eowZfgayjCLx80t-5_WfQHFPf5pU9HWNLpE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-26",
              title: "Chapter 26",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/yoQBBbAY#urHO78HzaYFXO6y4xXV_GxcpzYcF7i_VKXYNZQtFtQk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-27",
              title: "Chapter 27",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GgIHAT6D#tOG7qPzqb7TsbaHiAbnLpuns1LczyTmHC0nHiRCDRVA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-28",
              title: "Urdu Essays",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/v95xyaYB#DC3Fk1nGUFqohlx7QrDbLCD9RT1i_5eYhiVqOLWo0UQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                },
                {
              id: "urdu-20",
              title: "Urdu Comprehension",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/eg4EkCzB#Dmb3zaxr1l6dwRcqgWhZoSbEFrvtrTl2SIGqTyQ0WnA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
              },


          ]
        },
        {
          id: "english",
          title: "English",
          description: "Notes and resources for English book and grammar book of class 10.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 2,
          resources: [
            {
              id: "english-1",
              title: "Chapter 01",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/TpxlCaqK#V18b_3M-FYnOjJrJGcQqeyRNmrXD_ThJ1J3R-UsVegk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-2",
              title: "Chapter 02",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/OgwnGbCD#N22_DtaLzY-88sozufVhQEw6dkHQQiW61hnuTtcyDDE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-3",
              title: "Chapter 03",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/athT3KRB#fV76BLuOnEVHgPN5TxvnpY_TxXzkweD5aNtyhRqkE_Q",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-4",
              title: "Chapter 04",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WxoxhJbQ#V_7CBCv4COYIU0Lkotjdbam1YloW0i2aaq2_Y2QnnTM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-5",
              title: "Chapter 05",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nkxXjJhR#RJxbDeHkcNHWwnIhwX0SCmoXYjx0oU-MECrw-9bgIbE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-6",
              title: "Chapter 06",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/7wolwLTR#MPCv0IipuZfLsGNBBW0b3v9w6JU95qxW6dcQZpIHsiY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-7",
              title: "Chapter 07",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T9BmFB5a#cylzszBckuMz02uDdG2iOZJ6kABNDLo8k_0NbBP6fgM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-8",
              title: "Chapter 08",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/u4oVDLrL#6w4kNFqengSWMSfOO0JDTfzmwuttAlRFkuYmmKDqKkU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-9",
              title: "Chapter 09",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WxpV1IaJ#1QwD7aSKjUaw1ao6-bx8eqZ7Iv9oFO-FC6lEgda-nS8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-10",
              title: "Chapter 10",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/asZyBILZ#dBOHXfy2d91eMXu0hIJDpbRyw_IQLenVGI8VMlSZCdw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-11",
              title: "Chapter 11",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z54xCKTC#mH-gdUdC-Gqhh4MDYC54hu-iGlMECSr4sCJx0YfYeHs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-12",
              title: "Chapter 12 ",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/fhRmUL6Q#KIUKL3SCD9t4yDquFPW36RXkP1ksN5JlyGFndzMFk5k",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-13",
              title: "Chapter 13",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/yk5GXYbY#u8b9NvQrulXj4H4TSaNqYt3vK9AeModQbo19KIdlM18",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-14",
              title: "Pair Of Words",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/fxJWUYKB#jDk5xMryiK6ZJTFQBkFlCgh46hhguuP9StfGazDWkgA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-15",
              title: "Paragraph Translation",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WwZAFa4Z#6W7yk4ka1WXySeuG1AB7bg9wGIuAPUbvSDa-oBtdo9I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-16",
              title: "Correct Use Of Verbs",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/usQHSQDB#ltoJWBlr9sjAW23yLRCPRxbqft6rkVLebW1mIq6-hWM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
            },
            {
              id: "english-17",
              title: "Direct & Indirect speech",
              description: "Comprehensive notes for English covering Stories of English Language Grammar.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GtA3WCDa#4iaiJK6NjTU_rUJ7YARLRNKuek105jk05inHEshcgho",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammar"]
                }
          ]
        },
        {
          id: "pak-study",
          title: "Pak Study",
          description: "Notes and resources for Pak Study book of class 10 covering Pakistan history and culture.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 1,
            resources: [
              {
              id: "pak-1",
              title: "Chapter 05",
              description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6xJgSZRb#MrByi-WTGftn_sxXdimSlH78oIHUVz91YW39ktIW7zY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "History","Pakistan"]
                },
                {
              id: "pak-2",
              title: "Chapter 06",
              description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vlIwHIKD#Wg2sFkNJmZ5BPhsJx-JyLkkhGFHlFtSl6eYT8h5_Las",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "History","Pakistan"]
                },
                {
              id: "pak-5",
              title: "Chapter 07",
              description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/X8JXjLZY#Y3qjZ5h-9_oYjmXfssxPpZ5fpKreial2CH-nLRvXFC4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "History","Pakistan"]
                },
                {
              id: "pak-8",
              title: "Chapter 08",
              description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/j8IlBTYS#W7LVdEgTfDv0TTy0zz58aRTceEMtV832BI2SmMiMQKM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "History","Pakistan"]
                }
          ]
        },
        {
          id: "biology",
          title: "Biology",
          description: "Notes and resources for Biology.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 4,
          resources: [
            {
              id: "bio-1",
              title: "Chapter 10",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z8RwmBZD#v7xwvvXs88qd_uBEeUJQGDDfSTh0c-BuJgJ__Asj2CQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-2",
              title: "Chapter 11 ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/fkhA1Cia#adfFObxGrm0GOHq1JqBKWV78873M5fFbJNqljUaIpWw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-3",
              title: "Chapter 12 ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3whkkZjD#LG-SuwJYEJBWQCg1GNZ9GxsoNMjbyN1icG4CSdGaIqs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-4",
              title: "Chapter 13",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/n1pjlZpK#ASWWPtWdKAVC67iyuanUKxu8m8tIrgYKNDBhxCbaNsI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-5",
              title: "Chapter 14",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ytZBGTTC#8JcUHe7pQ2Y0IYKkDnIiGEzPVXSlpXQhy9omrI58RKE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-6",
              title: "Chapter 15",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/qgggRRha#Fxr-CZKBjWM5vF5ia_ZGcOCmyAUKvWJbUWnP5xROA_E",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-7",
              title: "Chapter 16",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ywgEyLbD#5sR9oR8CTM4148038buH9vSOqpUiu_yDSOonQl-2fbE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-8",
              title: "Chapter 17",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/zso2DL4B#vWpGmMgtmVWATe9TU46sOpE2thleHIBJWR0xJahD1sc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-9",
              title: "Chapter 18",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3ghhxIiD#tfxojdhHU755eW2D6CKYzBECShvA9tdiI-Ii1qtV8BE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            }
          ]
        },
        {
          id: "physics",
          title: "Physics",
          description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 3,
          resources: [
            {
              id: "phy-1",
              title: "Chapter 10",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6lRzFQRL#Lyx4iO_HVqswCmTLNhyuVFG7B0TE2bisDAq4Tt6WgFs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-2",
              title: "Chapter 11",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Pl4zkQJB#fpU1c0BpnQlhWqbGSFPugn9kmCxvgIFuIuyMZvzo3pA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-3",
              title: "Chapter 12",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/X0AU3YxL#Hk4JTPDMevaU69Rlo6M_2zyaN9d9nXsmTzyxmIbhRK8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-4",
              title: "Chapter 13",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/j5YzXAhI#vX-Lp5fED0HaslYBmUPuk1XCkc-NZECmBoDAYM6_Gw8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-5",
              title: "Chapter 14",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/D15jwagZ#6RPl_TS6Yt-WuW3X3MWteJOl8n0a71gGNllRDtXQEkU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-6",
              title: "Chapter 15",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/C9h1CSZZ#gOaNtkDzYYj4B3qFRSX21-uiRfl-sfn8WBVFF7qnpXo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-7",
              title: "Chapter 16",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ytIk0DZK#xFoTFcrdmfYXmfLcO5KLfesrq-IsmIoKP1aqhWyIgTc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-8",
              title: "Chapter 17",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6gBizYRA#fFlOLoV801VhtTBBkgHums26nnzFGmqGgbOKApYckyw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-9",
              title: "Chapter 18",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/isp0Ua4T#ZdNloaIJj44UvkkDRWnYzuqQDYhvB8UflcogNXWCFME",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            }
          ]
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 2,
          resources: [
            {
              id: "chem-1",
              title: "Chapter 09",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/PkhCmAQb#nDGrW8RPWEoRKOQKOcE5qClVeKAC4ExeGh7EmMPhSE8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-2",
              title: "Chapter 10",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z1pkgI7J#dVVzdOflWiqUXlEwbBJQHL3dQOLyLTyJaY41BZ-5nIo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-3",
              title: "Chapter 11",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mlpmFZCK#z35UhGitAOk49xP-mJZ7glYoFY72l6qNT7KA3AE0Luc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-4",
              title: "Chapter 12",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/rpxyxBya#cbyrT70MvNzt8YP6Mpf53WV0XRAmP12VCI9bqLkyJdw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-5",
              title: "Chapter 13",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2t4GUByJ#y923MoQ2UU_gc_s7oiJg6MEiwhu8L2EFn59gmsAhr04",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-6",
              title: "Chapter 14",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/egoVAATK#u8J_PznLI4Ht3hWun1ksSVsWZwCmnSO6CEd0ECmRvXE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-7",
              title: "Chapter 15",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/r5IGnLYL#fachXgxj7wFLg4arR4IN8Q_sENqpaR1jiE0VRRkcByo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-8",
              title: "Chapter 16",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/TtJzGCQD#R14lECebnPQ9LF0zvMOEWBx3iKL8x_ujLrSdoQrxSL4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            }
          ]
        },
        {
          id: "computer",
          title: "Computer",
          description: "Notes and resources for Computer covering Fundamental of logic and programming.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 1,
          resources: [
            {
              id: "comp-1",
              title: "Chapter 01 Long Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/K0QQGLbY#IJa4AtcvaVQOdr0BjuY85TwsQL0BAIdeQDMJ0rQTayA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-2",
              title: "Chapter 01 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/DpxGwAiT#v_T6Fi0U3hdijUhfgMy0u3r4WGlqR77PyzYPYcreAb8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-3",
              title: "Chapter 01 Exercise",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Tg4lwQJK#0jmO02BJoLyfSU709Brm9XaHFruyAdMLx0BdZ0AJYmg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-4",
              title: "Chapter 01 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/DpxGwAiT#v_T6Fi0U3hdijUhfgMy0u3r4WGlqR77PyzYPYcreAb8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-5",
              title: "Chapter 02 Long Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nwgVlSrZ#WRqP-jOk-QUS42EJWdW6P6zpONdePuqTK6gdUV0FndQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-6",
              title: "Chapter 02 Exercise",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/L8ozHQjI#UWddtAn6a2iiRmjGFGG01C0tfZJPJUe-mrlzS892dMA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-7",
              title: "Chapter 02 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/us4kHJrZ#CgsfsKkiEwNOxmvuobkWx822LrOXlPspYuck6Cp-47g",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-8",
              title: "Chapter 03 Long Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/XggwVYKJ#aXZCtTqGUKLcNTPkaRxa-v6Z3j5kNfdkv1405-7QQ_c",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-9",
              title: "Chapter 03 Exercise",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b1wjnIBJ#En2hdLpU2X2V5XaO50IAoTyqAIB3FQAVM94mlfbrD8I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-10",
              title: "Chapter 03 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ToIERJTa#rOX-69owqmVONM015YLjbaXuNg6mRgUuMYYceXocFPg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-11",
              title: "Chapter 04 Long Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/K0RjUSbb#Loz5m8GMyFwJ57DaDBBz385nQHd3aqbfGWBHvvt_drM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-12",
              title: "Chapter 04 Exercise",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/igozwBpI#JrD8bdg7BOUFXWDW0MVDFXH_sQzD9JmVj_YGGryDjco",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-13",
              title: "Chapter 04 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/CphkTT5b#yDfwSKkU2knwdCvUjSxJpANFMTxrbSx4BOzFUDC98Xg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-14",
              title: "Chapter 05 Long Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KlxhRTLK#E4J00HA-vviCtuR4fD-WSe8WzSN8zO2fOm2PGIfC5Vk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-15",
              title: "Chapter 05 Exercise",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3wpHSbzC#XnNxsYxodsTjBbU66bgt2VxWs35JQw4o2wh4VCT-DjU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-16",
              title: "Chapter 05 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G5xh2BJC#7B2AZ11NbJkTxBqr-DqpMImaCGH56kMNjMlWURDfqW4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
          ]
        },
        {
          id: "math",
          title: "Mathematics",
          description: "Notes and resources for Math covering problem solving and learning techniques.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 5,
          resources: [
            {
              id: "math-1",
              title: "Chapter 01",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nhhinYQA#H7cjBd0SYIhkPb8glDakwgGSLdpfm5YPVlNE2751R5Y",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-2",
              title: "Chapter 02",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/r1ByRLrB#zC1s-z5A8s_ZdF0ew38-Eg4egaEaSljIVLFiPQOj618",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-3",
              title: "Chapter 03",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2sgSWTDL#aXWnbUvmBWubES1iEEkHxsTCpk8iggfzZ_5CGp1K7Mg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-4",
              title: "Chapter 04",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b85FwCwa#4LLyINZv55PTdnUik6HYvIb_nYVBixanE4Q8zcWg4vs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-5",
              title: "Chapter 05",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/m8ZnxZbS#WHHVONTqJQWYmGZh3Zkcl5RkFtv6_RsGhGgWXSV4Tbg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-6",
              title: "Chapter 06",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/v8Q2XbzS#NBclfQU9LOoi3gsx755vYvzN0l7hoxhzK9IJAreIU5I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-7",
              title: "Chapter 07",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/78xD3DqQ#jpGMyDHBUcPZGSxN_e19v_EE7pWEe77bzedEKYSw2lc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-8",
              title: "Chapter 08",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/r9wjHT7C#LYIgiaRF2U3inDpcku27YzQB00Sql0gIWWucKE4ru3U",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-9",
              title: "Chapter 09",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KtBklCKS#C6NF047zxC4q3ZuvUR6W_yQLFIY_YXy6Fa0dQsoeGMI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-10",
              title: "Chapter 10",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/f04WhYLK#GXYDJ-E6yA6sVTfHVRbwtuYnVBEBHi2GFPZ9YHWQmLI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-11",
              title: "Chapter 11",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G45EkBoB#RfxBYHVlBwH3-G3Bw5Dw-aHtltLNRxG61KREmv12J1k",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-12",
              title: "Chapter 12",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/7lYkQLJQ#fnIc2Q5_bSsgLR7EucI8W_XMIxeSQczHdwXiLSAeUAY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-13",
              title: "Chapter 13",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/awInRK5R#tIQtAh-XvKqSM6JBdZO3cflXahAwhCyRATKTy-BtjXE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            }
          ]
        }
    ];

export const Class10notes = (): JSX.Element => <section className="ed-page"><div className="page-intro"><div><span className="eyebrow">PUNJAB BOARD / CLASS 10</span><h1>Class 10 notes & solutions.</h1><p>Search by subject and open the resource you need.</p></div></div><ResourceCollection resources={categories.flatMap(category => category.resources.map(resource => ({ ...resource, subject: category.title })))} grade="class-10" kind="notes" /></section>;
export default Class10notes;
