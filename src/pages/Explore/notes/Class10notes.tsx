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
          color: "from-green-500 to-green-700",
          bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
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
          color: "from-blue-500 to-blue-700",
          bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20",
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
          color: "from-purple-500 to-purple-700",
          bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
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
          color: "from-yellow-500 to-yellow-700",
          bgPattern: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/20",
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
          color: "from-pink-500 to-pink-700",
          bgPattern: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/20",
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
          color: "from-teal-500 to-teal-700",
          bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/20",
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
          color: "from-indigo-500 to-indigo-700",
          bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/20",
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
          color: "from-red-500 to-red-700",
          bgPattern: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/20",
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
          color: "from-cyan-500 to-cyan-700",
          bgPattern: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/20",
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
          color: "from-orange-500 to-orange-700",
          bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/20",
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

const Class10notes = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const filteredResources = selectedCategoryData?.resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = filterDifficulty === "All" || resource.difficulty === filterDifficulty;
    
    return matchesSearch && matchesDifficulty;
  }) || [];

  const handleDownload = (downloadLink: string, title: string) => {
    // In a real application, you would handle the download here
    // For now, we'll just open the link
    window.open(downloadLink, '_blank');
  };

  const handlePreview = (resource: Resource) => {
    // In a real application, you would show a preview modal or navigate to a preview page
    alert(`Preview for ${resource.title} would open here`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  if (selectedCategory && selectedCategoryData) {
    return (
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedCategoryData.color} shadow-2xl mb-6`}>
            <selectedCategoryData.icon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
            {selectedCategoryData.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {selectedCategoryData.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-900 dark:text-white">{selectedCategoryData.resourceCount}</span>
              <span className="text-gray-600 dark:text-gray-400">Resources</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-900 dark:text-white">5K+</span>
              <span className="text-gray-600 dark:text-gray-400">Downloads</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-900 dark:text-white">4.8</span>
              <span className="text-gray-600 dark:text-gray-400">Rating</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{resource.rating}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-2 leading-tight">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {resource.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* File Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{resource.format}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{resource.downloads}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(resource.downloadLink, resource.title)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                {resource.previewAvailable && (
                  <button
                    onClick={() => handlePreview(resource)}
                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => window.open(resource.downloadLink, '_blank')}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No resources found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl mb-6">
          <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
          Class 10 Notes Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Comprehensive notes and study materials for Class 10 students covering all subjects with detailed explanations and examples.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">10K+</span>
            <span className="text-gray-600 dark:text-gray-400">Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">200+</span>
            <span className="text-gray-600 dark:text-gray-400">Resources</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-900 dark:text-white">4.8</span>
            <span className="text-gray-600 dark:text-gray-400">Rating</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative ${category.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header with Icon and Count */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
                    {category.resourceCount} Resources
                  </span>
                </div>

                {/* Title and Description */}
                <div className="flex-grow mb-6">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    <span>Explore Resources</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 transform -rotate-12 scale-150" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-['Newsreader',Helvetica]">
              Ready to Excel in Class 10?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access comprehensive notes and study materials designed specifically for Class 10 students to achieve academic excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                View All Subjects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class10notes;
