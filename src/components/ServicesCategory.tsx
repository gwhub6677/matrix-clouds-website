import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, Search, MapPin, ChevronDown, ChevronRight, RotateCcw, Gamepad2, Server, Globe, Bot, Code } from 'lucide-react';

const ServicesCategory = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Minecraft Hosting');
  const [selectedLocation, setSelectedLocation] = useState('MC-PLAN');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Minecraft Hosting']);

  const PURCHASE_LINKS: Record<number, string> = {
    1: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/classic',
    2: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/common',
    3: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/epic',
    4: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/pro',
    5: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/power',
    6: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/mega',
    7: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/premium',
    8: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/matrix',
    9: 'https://www.matrixclouds.site/billing/store/minecraft-hosting/infinite',
    10: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/classic-plan',
    11: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/epic-plan',
    12: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/pro-plan',
    13: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/power-plan',
    14: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/mega-plan',
    15: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/premium-plan',
    16: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/matrix-plan',
    17: 'https://www.matrixclouds.site/billing/store/performance-minecraft-hosting/infinite-plan',
    18: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/common-plan',
    19: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/epic-plan',
    20: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/pro-plan',
    21: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/power-plan',
    22: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/mega-plan',
    23: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/premium-plan',
    24: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/matrix-plan',
    25: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/infinite-plan',
    26: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/matrix-plan',
    27: 'https://www.matrixclouds.site/billing/store/annual-minecraft-hosting/infinite-plan',
    32: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/aurora-vps',
    33: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/starlight-vps',
    34: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/eclipse-vps',
    35: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/novacore-vps',
    36: 'https://www.matrixclouds.site/billing/store/vps-hosting/india-intel-xeon-vps-budget',
    37: 'https://www.matrixclouds.site/billing/store/vps-hosting/warpdrive-vps',
    38: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/starlight-vps',
    39: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/eclipse-vps',
    40: 'https://www.matrixclouds.site/billing/store/vps-hosting/solarflare-vps',
    41: 'https://www.matrixclouds.site/billing/store/vps-hosting/hypernova-vps',
    42: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-india/novacore-vps',
    43: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-germany/mercury-vps',
    44: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-germany/saturn-vps',
    45: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-germany/jupiter-vps',
    46: 'https://www.matrixclouds.site/billing/store/intel-standard-vps-germany/titan-vps',
    52: 'https://www.matrixclouds.site/billing/store/web-hosting/normal-web-plan',
    53: 'https://www.matrixclouds.site/billing/store/web-hosting/power-web-plan',

  };

  // Handle URL parameters on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const locationParam = searchParams.get('location');
    
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
      if (!expandedCategories.includes(decodeURIComponent(categoryParam))) {
        setExpandedCategories(prev => [...prev, decodeURIComponent(categoryParam)]);
      }
    }
    
    if (locationParam) {
      setSelectedLocation(decodeURIComponent(locationParam));
    }
  }, [searchParams]);

  const categories = [
    { name: 'Minecraft Hosting', icon: Gamepad2, locations: ['MC-PLAN', 'PERFORMANCE-MC-PLAN', 'ANNUAL-MC-PLAN'] },
    { name: 'VPS Hosting', icon: Server, locations: ['India-Intel', 'India-Ryzen9', 'Germany-Intel', 'Germany-Ryzen9'] },
    { name: 'Web Development', icon: Globe, locations: ['Web-Plan'] },
    { name: 'Discord Bot', icon: Bot, locations: ['Bot Hosting'] }
  ];

  const services = [
    {
      id: 1,
      name: 'Classic',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹60.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '2GB',
        cpu: '100%',
        storage: '4GB',
        backups: '1',
        databases: '1',
        portAllocation: '0'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 2,
      name: 'Common',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹150.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '4GB',
        cpu: '150%',
        storage: '10GB',
        backups: '2',
        databases: '1',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 3,
      name: 'Epic',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹200.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '6GB',
        cpu: '180%',
        storage: '25GB',
        backups: '3',
        databases: '2',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 4,
      name: 'Pro',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹350.00',
      billing: 'Monthly',
      popular: true,
      specs: {
        ram: '8GB',
        cpu: '250%',
        storage: '40GB',
        backups: '4',
        databases: '2',
        portAllocation: '2'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 5,
      name: 'Power',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹520.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '12GB',
        cpu: '300%',
        storage: '50GB',
        backups: '5',
        databases: '3',
        portAllocation: '3'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 6,
      name: 'Mega',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹740.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB',
        cpu: '400%',
        storage: '64GB',
        backups: '7',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 7,
      name: 'Premium',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹960.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '24GB',
        cpu: '500%',
        storage: '75GB',
        backups: '9',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 8,
      name: 'Matrix',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹1220.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB',
        cpu: '800%',
        storage: '110GB',
        backups: '10',
        databases: '8',
        portAllocation: '8'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 9,
      name: 'Infinite',
      category: 'Minecraft Hosting',
      location: 'Mumbai, India',
      price: '₹1400.00',
      billing: 'Monthly',
      popular: true,
      specs: {
        ram: '∞GB',
        cpu: '∞%',
        storage: '∞GB',
        backups: '∞',
        databases: '∞',
        portAllocation: '∞'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 10,
      name: 'Classic',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹150.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '2GB',
        cpu: '100%',
        storage: '4GB',
        backups: '1',
        databases: '1',
        portAllocation: '0'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 11,
      name: 'Epic',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹320.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '6GB',
        cpu: '180%',
        storage: '25GB',
        backups: '3',
        databases: '2',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 12,
      name: 'Pro',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹450.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB',
        cpu: '250%',
        storage: '40GB',
        backups: '4',
        databases: '2',
        portAllocation: '2'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 13,
      name: 'Power',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹790.00',
      billing: 'Monthly',
      popular: true,
      specs: {
        ram: '12GB',
        cpu: '300%',
        storage: '50GB',
        backups: '5',
        databases: '3',
        portAllocation: '3'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 14,
      name: 'Mega',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹1000.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB',
        cpu: '400%',
        storage: '64GB',
        backups: '7',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 15,
      name: 'Premium',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹1460.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '24GB',
        cpu: '500%',
        storage: '75GB',
        backups: '9',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 16,
      name: 'Matrix',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹1980.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB',
        cpu: '800%',
        storage: '110GB',
        backups: '10',
        databases: '8',
        portAllocation: '8'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 17,
      name: 'Infinite',
      category: 'Minecraft Hosting',
      location: 'Performance, India',
      price: '₹2400.00',
      billing: 'Monthly',
      popular: true,
      specs: {
        ram: '∞GB',
        cpu: '∞%',
        storage: '∞GB',
        backups: '∞',
        databases: '∞',
        portAllocation: '∞'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 18,
      name: 'Common',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹700.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '4GB',
        cpu: '150%',
        storage: '10GB',
        backups: '2',
        databases: '1',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 19,
      name: 'Epic',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹900.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '6GB',
        cpu: '180%',
        storage: '25GB',
        backups: '3',
        databases: '2',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 20,
      name: 'Pro',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹1500.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '8GB',
        cpu: '250%',
        storage: '40GB',
        backups: '4',
        databases: '2',
        portAllocation: '2'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 21,
      name: 'Power',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹1700.00',
      billing: 'Annually',
      popular: true,
      specs: {
        ram: '12GB',
        cpu: '300%',
        storage: '50GB',
        backups: '5',
        databases: '3',
        portAllocation: '3'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 22,
      name: 'Mega',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹2200.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '16GB',
        cpu: '400%',
        storage: '64GB',
        backups: '7',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 23,
      name: 'Premium',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹2600.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '24GB',
        cpu: '500%',
        storage: '75GB',
        backups: '9',
        databases: '5',
        portAllocation: '5'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 26,
      name: 'Matrix',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹4200.00',
      billing: 'Annually',
      popular: false,
      specs: {
        ram: '32GB',
        cpu: '800%',
        storage: '110GB',
        backups: '10',
        databases: '8',
        portAllocation: '8'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 27,
      name: 'Infinite',
      category: 'Minecraft Hosting',
      location: 'Annual, India',
      price: '₹5000.00',
      billing: 'Annually',
      popular: true,
      specs: {
        ram: '∞GB',
        cpu: '∞%',
        storage: '∞GB',
        backups: '∞',
        databases: '∞',
        portAllocation: '∞'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support']
    },
    {
      id: 28,
      name: 'Basic Plan',
      category: 'Discord Bot',
      location: 'Bot Hosting',
      price: '₹120.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '1GB',
        cpu: '50%',
        storage: '4GB',
        backups: '1',
        databases: '1',
        portAllocation: '1'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Auto Restart']
    },
    {
      id: 29,
      name: 'Standard Plan',
      category: 'Discord Bot',
      location: 'Bot Hosting',
      price: '₹240.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '2GB',
        cpu: '100%',
        storage: '12GB',
        backups: '2',
        databases: '2',
        portAllocation: '2'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Auto Restart']
    },
    {
      id: 30,
      name: 'Advanced Plan',
      category: 'Discord Bot',
      location: 'Bot Hosting',
      price: '₹480.00',
      billing: 'Monthly',
      popular: true,
      specs: {
        ram: '4GB',
        cpu: '200%',
        storage: '24GB',
        backups: '4',
        databases: '4',
        portAllocation: '4'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Auto Restart']
    },
    {
      id: 31,
      name: 'Legacy Max Plan',
      category: 'Discord Bot',
      location: 'Bot Hosting',
      price: '₹960.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '∞GB',
        cpu: '∞%',
        storage: '∞GB',
        backups: '∞',
        databases: '∞',
        portAllocation: '∞'
      },
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Auto Restart']
    },
    {
      id: 32,
      name: 'Intel Xeon E5-2673 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹800.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB DDR4',
        cpu: '4v',
        storage: '80GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 33,
      name: 'Intel Xeon E5-2682 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹700.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB DDR4',
        cpu: '2v',
        storage: '80GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 34,
      name: 'Intel Xeon E5-2682 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹1050.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB DDR4',
        cpu: '4v',
        storage: '150GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 35,
      name: 'Intel Xeon E5-2673 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹1350.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB DDR4',
        cpu: '6v',
        storage: '150GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 36,
      name: 'Intel Xeon E5-2673 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹1750.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB DDR4',
        cpu: '8v',
        storage: '300GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 37,
      name: 'Intel Xeon E5-2682 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹1650.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB DDR4',
        cpu: '6v',
        storage: '300GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 38,
      name: 'Intel Xeon E5-2682 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹2200.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '64GB DDR4',
        cpu: '6v',
        storage: '400GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 39,
      name: 'Intel Xeon E5-2673 V4',
      category: 'VPS Hosting',
      location: 'Intel-India',
      price: '₹2600.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '64GB DDR4',
        cpu: '12v',
        storage: '400GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.30 GHz Base | 3.30 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 40,
      name: 'Ryzen 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-India',
      price: '₹1550.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB DDR4',
        cpu: '2v',
        storage: '80GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 41,
      name: 'Ryzen 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-India',
      price: '₹2230.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB DDR4',
        cpu: '4v',
        storage: '120GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 42,
      name: 'Ryzen 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-India',
      price: '₹3200.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB DDR4',
        cpu: '6v',
        storage: '200GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 43,
      name: 'Ryzen 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-India',
      price: '₹5200.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '64GB DDR4',
        cpu: '8v',
        storage: '300GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Advanced DDOS Protection', '99.9% Uptime']
    },
    {
      id: 44,
      name: 'Intel® Xeon® Gold 6150',
      category: 'VPS Hosting',
      location: 'Germany-Intel',
      price: '₹600.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB DDR4',
        cpu: '2v',
        storage: '50GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.70 GHz Base | 3.70 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 45,
      name: 'Intel® Xeon® Gold 6150',
      category: 'VPS Hosting',
      location: 'Germany-Intel',
      price: '₹950.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB DDR4',
        cpu: '4v',
        storage: '150GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.70 GHz Base | 3.70 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 46,
      name: 'Intel® Xeon® Gold 6150',
      category: 'VPS Hosting',
      location: 'Germany-Intel',
      price: '₹2000.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '36GB DDR4',
        cpu: '6v',
        storage: '250GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.70 GHz Base | 3.70 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 47,
      name: 'Intel® Xeon® Gold 6150',
      category: 'VPS Hosting',
      location: 'Germany-Intel',
      price: '₹2500.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '48GB DDR4',
        cpu: '8v',
        storage: '300GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['2.70 GHz Base | 3.70 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 48,
      name: 'AMD Ryzen™ 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-Germany',
      price: '₹800.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '6GB DDR4',
        cpu: '2v',
        storage: '50GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 49,
      name: 'AMD Ryzen™ 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-Germany',
      price: '₹1000.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '8GB DDR4',
        cpu: '2v',
        storage: '50GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 50,
      name: 'AMD Ryzen™ 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-Germany',
      price: '₹1900.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '16GB DDR4',
        cpu: '4v',
        storage: '120GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 51,
      name: 'AMD Ryzen™ 9 5900X',
      category: 'VPS Hosting',
      location: 'Ryzen9-Germany',
      price: '₹2600.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ram: '32GB DDR4',
        cpu: '6v',
        storage: '200GB NVME SSD',
        bandwidth: '1000'
      },
      features: ['3.70 GHz Base | 4.80 GHz Turbo', '24/7 Support', 'Combatton DDoS Protection', '99.9% Uptime']
    },
    {
      id: 52,
      name: 'Normal Plan',
      category: 'Web Development',
      location: 'Web-Plan',
      price: '₹120.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ssd: 'Unlimited NVMe SSD',
        panel: 'cPanel',
        storage: 'Unlimited Space',
        bandwidth: 'Unlimited'
      },
      features: [
        'One Website',
        'Unlimited Subdomain',
        'Unlimited Email Account(s)',
        'WordPress 1-Click Install',
        'SSL Certificate',
        'Free ticket support',
        'Easy upgrade via customer interface'
      ]
    },
    {
      id: 53,
      name: 'Power Plan',
      category: 'Web Development',
      location: 'Web-Plan',
      price: '₹200.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ssd: 'Unlimited NVMe SSD',
        panel: 'cPanel',
        storage: 'Unlimited Space',
        bandwidth: 'Unlimited'
      },
      features: [
        'Two Website',
        'Unlimited Subdomain',
        'Unlimited Email Account(s)',
        'WordPress 1-Click Install',
        'SSL Certificate',
        'Free ticket support',
        'Easy upgrade via customer interface'
      ]
    },
    {
      id: 54,
      name: 'Pro Plan',
      category: 'Web Development',
      location: 'Web-Plan',
      price: '₹300.00',
      billing: 'Monthly',
      popular: false,
      specs: {
        ssd: 'Unlimited NVMe SSD',
        panel: 'cPanel',
        storage: 'Unlimited Space',
        bandwidth: 'Unlimited'
      },
      features: [
        'Two Website',
        'Unlimited Subdomain',
        'Unlimited Email Account(s)',
        'WordPress 1-Click Install',
        'SSL Certificate',
        'SSH/Terminal',
        'Free ticket support',
        'Easy upgrade via customer interface'
      ]
    },
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'MC-PLAN' ? 
      service.location.includes('Mumbai') : 
     selectedLocation === 'PERFORMANCE-MC-PLAN' ?
       service.location.includes('Performance') :
     selectedLocation === 'ANNUAL-MC-PLAN' ?
       service.location.includes('Annual') :
     selectedLocation === 'India-Intel' ?
       service.location.includes('Intel-India') :
    selectedLocation === 'India-Ryzen9' ?
      service.location.includes('Ryzen9-India') :
    selectedLocation === 'Germany-Ryzen9' ?
      service.location.includes('Ryzen9-Germany') :
      service.location.includes(selectedLocation);
    return matchesCategory && matchesSearch && matchesLocation;
  });

  const toggleCategoryExpansion = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (!expandedCategories.includes(categoryName)) {
      setExpandedCategories(prev => [...prev, categoryName]);
    }
    // Set default location for the category
    const category = categories.find(cat => cat.name === categoryName);
    if (category && category.locations.length > 0) {
      setSelectedLocation(category.locations[0]);
    }
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const resetFilters = () => {
    setSelectedCategory('Minecraft Hosting');
    setSelectedLocation('MC-PLAN');
    setSearchTerm('');
    setExpandedCategories(['Minecraft Hosting']);
  };

  return (
    <div className="min-h-screen dotted-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          {/* All Services Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
              <span className="text-blue-300 text-sm font-medium">All Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Comprehensive hosting and development solutions tailored to your needs. From game servers to custom development, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sticky top-24">
              {/* Filter Header */}
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Filter Services</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Service Categories */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Service Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={category.name}>
                        <button
                          onClick={() => handleCategorySelect(category.name)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-300 ${
                            selectedCategory === category.name
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <IconComponent className="h-4 w-4" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategoryExpansion(category.name);
                            }}
                            className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
                          >
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${
                                expandedCategories.includes(category.name) ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        </button>
                        
                        {/* Location submenu for selected category */}
                        {expandedCategories.includes(category.name) && (
                          <div className="ml-4 mt-2 space-y-1">
                            {category.locations.map((location) => (
                              <button
                                key={location}
                                onClick={() => handleLocationSelect(location)}
                                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${
                                  selectedLocation === location
                                    ? 'bg-blue-500/50 text-blue-300'
                                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
                                }`}
                              >
                                <MapPin className="h-3 w-3" />
                                <span>{location}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleLocationSelect(location);
                                  }}
                                  className="ml-auto p-1 hover:bg-white/10 rounded transition-colors duration-200"
                                >
                                  <ChevronRight className="h-3 w-3" />
                                </button>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={resetFilters}
                className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Available Services</h2>
              <span className="text-gray-400">{filteredServices.length} services found</span>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 relative"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 right-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Service Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Gamepad2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.category === 'Web Development' ? (
                      <>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="text-gray-400 text-xs mb-1">SSD</div>
                          <div className="text-white font-semibold">{(service.specs as any).ssd}</div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="text-gray-400 text-xs mb-1">Panel</div>
                          <div className="text-white font-semibold">{(service.specs as any).panel}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="text-gray-400 text-xs mb-1">Ram</div>
                          <div className="text-white font-semibold">{service.specs.ram}</div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <div className="text-gray-400 text-xs mb-1">Cpu</div>
                          <div className="text-white font-semibold">{service.specs.cpu}</div>
                        </div>
                      </>
                    )}
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-gray-400 text-xs mb-1">Storage</div>
                      <div className="text-white font-semibold">{service.specs.storage}</div>
                    </div>
                    {service.category === 'VPS Hosting' && (
                      <div className="bg-gray-700/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">Bandwidth</div>
                        <div className="text-white font-semibold">{(service.specs as any).bandwidth}</div>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-gray-400 text-sm mb-2">Features</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                    <div className="text-gray-400 text-sm mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-white">
                      {service.price}<span className="text-sm text-gray-400">/mo</span>
                    </div>
                  </div>

                  {PURCHASE_LINKS[service.id] ? (
                    <a
                      href={PURCHASE_LINKS[service.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get Started
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;