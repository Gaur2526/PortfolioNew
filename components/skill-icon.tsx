'use client'

import React from 'react'
import { BadgeCheck, BrainCircuit, BriefcaseBusiness, Code, Code2, Cpu, GitBranch, Hexagon, Layers3, Sparkles, Terminal, Waypoints, Boxes, Network } from "lucide-react"

// Custom high-quality SVG path components for technology logos
const PythonIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
)

const ReactIcon = () => (
  <svg className="w-3.5 h-3.5 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const NextjsIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
  </svg>
)

const RedisIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" />
  </svg>
)

const TailwindIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
)

const NodejsIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.7L2.4 7.2v11.1L12 23.8l9.6-5.5V7.2L12 1.7zm1.1 18v-4.1l3.5-2 3.5 2V17l-7 2.7zm-2.2 0L3.9 17v-1.4l3.5-2 3.5 2v4.1zm5.6-7.3l-3.5 2-3.5-2V8.3l3.5-2 3.5 2v4.4z" />
  </svg>
)

const MongodbIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
)

const PostgresIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.9 14.5c-.24.06-.5.1-.76.12-.58.05-1.16-.08-1.63-.4-.44-.3-.7-.78-.7-1.3v-1.85h3.1v1.65c0 .76-.4 1.48-1.01 1.78zM15 13h-4.32V9.67h4.32c.55 0 1 .45 1 1v1.33c0 .55-.45 1-1 1zm-5.5-5.5h1v1.33h-1c-.55 0-1-.45-1-1v-.33c0-.55.45-1 1-1zm3.83-2.17c.55 0 1 .45 1 1v.33c0 .55-.45 1-1 1h-1.33V5.33h1.33z" />
  </svg>
)

const FastapiIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.176 11.558l-5.69 7.744a.434.434 0 0 1-.77-.282V13.88h-3.64a.433.433 0 0 1-.36-.677l5.69-7.744a.434.434 0 0 1 .77.282v5.14h3.64a.433.433 0 0 1 .36.677z" />
  </svg>
)

const StripeIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.962 10.457c0-1.425-1.185-2.008-2.92-2.008-1.545 0-3.097.464-3.097.464l-.488-2.285s1.61-.66 3.9-.66c3.272 0 5.32 1.545 5.32 4.576 0 4.143-5.666 4.636-5.666 5.864 0 .524.479.824 1.258.824 1.9 0 3.557-.75 3.557-.75l.525 2.21s-1.462.824-4.223.824c-3.235 0-5.454-1.424-5.454-4.47 0-4.262 5.787-4.711 5.787-5.59z" />
  </svg>
)

const TensorflowIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.63L2.3 7.08v10.9L12 23.4l9.7-5.46v-10.9L12 1.63zm3.76 14.9L12 14.5l-3.76 2.03V10.1L12 8.07l3.76 2.03v6.43z" />
  </svg>
)

const TypescriptIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.08 0h21.84c.6 0 1.08.48 1.08 1.08v21.84c0 .6-.48 1.08-1.08 1.08H1.08C.48 24 0 23.52 0 22.92V1.08C0 .48.48 0 1.08 0zm11.36 17.65c0-1.92-1.28-3.02-3.83-3.8l-1-.3c-1.12-.34-1.54-.78-1.54-1.38 0-.68.56-1.16 1.56-1.16 1 0 1.54.42 1.7 1.26h2.8c-.16-2.28-1.74-3.66-4.5-3.66-2.82 0-4.66 1.4-4.66 3.66 0 1.76 1.1 2.8 3.56 3.55l1.08.33c1.3.4 1.78.9 1.78 1.57 0 .82-.68 1.28-1.88 1.28-1.46 0-2.12-.66-2.26-1.84H2.4c.14 2.92 1.94 4.2 4.88 4.2 3.16 0 5.16-1.5 5.16-4.1zm8.38 2.3v-12h-3.82v12h3.82z" />
  </svg>
)

const JavascriptIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
)

const GraphqlIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

const AwsIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.93 12.87c-.68.22-1.42.34-2.18.34a5.2 5.2 0 0 1-3.66-1.46c-.22-.22-.38-.5-.38-.79 0-.58.46-1.04 1.04-1.04.28 0 .56.12.76.32a3.11 3.11 0 0 0 4.48 0c.2-.2.48-.32.76-.32.58 0 1.04.46 1.04 1.04 0 .28-.16.56-.38.79a5.16 5.16 0 0 1-1.66 1.12z" />
  </svg>
)

const WebSocketIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const DataScienceIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
)

const SqliteIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
)

const VpsIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
    <line x1="10" y1="6" x2="10.01" y2="6" />
    <line x1="10" y1="18" x2="10.01" y2="18" />
  </svg>
)

const DevOpsIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2.5-3.5-5.5-5-8-5A4.5 4.5 0 0 0 4 16c2.5 0 5.5-1.5 8-5zm0 0c2.5 3.5 5.5 5 8 5a4.5 4.5 0 0 0 0-9c-2.5 0-5.5 1.5-8 5z" />
  </svg>
)

const DockerIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm0 2.716h2.118a.185.185 0 00.186-.185V6.292a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm0 2.714h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.073a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.185V6.292a.185.185 0 00-.185-.185H8.073a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.185.185 0 00.185-.185V6.292a.185.185 0 00-.185-.185H5.118a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm0 2.714h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.163a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.185.185 0 00.185-.185V6.292a.185.185 0 00-.185-.185H2.163a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm22.42 2.372c-.413-.277-1.464-.383-2.274-.234-.143-.45-.42-.857-.803-1.168l-.348-.284-.282.35c-.477.589-.7 1.378-.63 2.18-.088.026-.176.058-.262.09-1.282.493-2.678.188-3.725-.815l-.265-.256-.205.308c-.732 1.106-1.892 1.776-3.153 1.83-2.317.1-4.32-1.3-4.993-3.486l-.105-.343-.332.135c-.968.397-1.488 1.4-1.29 2.443.141.745.69 1.34 1.408 1.527l.21.055.03.216c.334 2.37 2.012 4.316 4.316 4.996 4.542 1.34 9.426-.957 11.233-5.26.48-.11.944-.32 1.373-.61.644-.436 1.055-1.077 1.16-1.804l.024-.168-.175-.084z" />
  </svg>
)

const LinuxIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.002 0C8.686 0 6 2.686 6 6c0 1.33.434 2.56 1.17 3.56C6.434 10.87 6 12.38 6 14c0 4.418 2.686 8 6 8s6-3.582 6-8c0-1.62-.434-3.13-1.17-4.44C17.566 8.56 18 7.33 18 6c0-3.314-2.686-6-5.998-6zm-3.25 4.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm6.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 12a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
)

const CloudIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
)

const DeploymentIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const InfrastructureIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="6" height="6" rx="1" />
    <rect x="16" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M5 9v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
    <path d="M12 14v1" />
  </svg>
)


// Define styles and colors for each tech logo
export interface TechConfig {
  icon: React.ComponentType
  color: string // Tailwind text color class
  bgHover: string // Tailwind bg hover class
  borderHover: string // Tailwind border color class
  displayName: string
}

export const TECH_MAP: Record<string, TechConfig> = {
  python: {
    icon: PythonIcon,
    color: 'text-amber-500 hover:text-amber-400 dark:text-amber-400 dark:hover:text-amber-300',
    bgHover: 'hover:bg-amber-500/10 dark:hover:bg-amber-400/10',
    borderHover: 'hover:border-amber-500/30 dark:hover:border-amber-400/30',
    displayName: 'Python',
  },
  fastapi: {
    icon: FastapiIcon,
    color: 'text-emerald-500 hover:text-emerald-400',
    bgHover: 'hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    displayName: 'FastAPI',
  },
  react: {
    icon: ReactIcon,
    color: 'text-sky-500 hover:text-sky-400',
    bgHover: 'hover:bg-sky-500/10',
    borderHover: 'hover:border-sky-500/30',
    displayName: 'React',
  },
  reactflow: {
    icon: GitBranch,
    color: "text-rose-500 hover:text-rose-400",
    bgHover: "hover:bg-rose-500/10",
    borderHover: "hover:border-rose-500/30",
    displayName: "React Flow",
  },
  zustand: {
    icon: Layers3,
    color: "text-amber-500 hover:text-amber-400",
    bgHover: "hover:bg-amber-500/10",
    borderHover: "hover:border-amber-500/30",
    displayName: "Zustand",
  },
  pydantic: {
    icon: BadgeCheck,
    color: "text-violet-500 hover:text-violet-400",
    bgHover: "hover:bg-violet-500/10",
    borderHover: "hover:border-violet-500/30",
    displayName: "Pydantic",
  },
  restapis: {
    icon: Waypoints,
    color: "text-blue-500 hover:text-blue-400",
    bgHover: "hover:bg-blue-500/10",
    borderHover: "hover:border-blue-500/30",
    displayName: "REST APIs",
  },
  mcp: {
    icon: Boxes,
    color: "text-fuchsia-500 hover:text-fuchsia-400",
    bgHover: "hover:bg-fuchsia-500/10",
    borderHover: "hover:border-fuchsia-500/30",
    displayName: "MCP",
  },
  apis: {
    icon: Network,
    color: "text-blue-500 hover:text-blue-400",
    bgHover: "hover:bg-blue-500/10",
    borderHover: "hover:border-blue-500/30",
    displayName: "APIs",
  },
  ai: {
    icon: BrainCircuit,
    color: "text-violet-500 hover:text-violet-400",
    bgHover: "hover:bg-violet-500/10",
    borderHover: "hover:border-violet-500/30",
    displayName: "AI",
  },
  career: {
    icon: BriefcaseBusiness,
    color: "text-orange-500 hover:text-orange-400",
    bgHover: "hover:bg-orange-500/10",
    borderHover: "hover:border-orange-500/30",
    displayName: "Career",
  },
  programming: {
    icon: Code2,
    color: "text-blue-500 hover:text-blue-400",
    bgHover: "hover:bg-blue-500/10",
    borderHover: "hover:border-blue-500/30",
    displayName: "Programming",
  },
  softwareengineering: {
    icon: Cpu,
    color: "text-cyan-500 hover:text-cyan-400",
    bgHover: "hover:bg-cyan-500/10",
    borderHover: "hover:border-cyan-500/30",
    displayName: "Software Engineering",
  },
  technology: {
    icon: Cpu,
    color: "text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-100",
    bgHover: "hover:bg-slate-500/10",
    borderHover: "hover:border-slate-500/30",
    displayName: "Technology",
  },
  tailwindcss: {
    icon: TailwindIcon,
    color: 'text-cyan-500 hover:text-cyan-400',
    bgHover: 'hover:bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    displayName: 'Tailwind CSS',
  },
  websocket: {
    icon: WebSocketIcon,
    color: 'text-indigo-500 hover:text-indigo-400',
    bgHover: 'hover:bg-indigo-500/10',
    borderHover: 'hover:border-indigo-500/30',
    displayName: 'WebSocket',
  },
  xtermjs: {
    icon: Terminal,
    color: 'text-rose-500 hover:text-rose-400',
    bgHover: 'hover:bg-rose-500/10',
    borderHover: 'hover:border-rose-500/30',
    displayName: 'xterm.js',
  },
  nodejs: {
    icon: NodejsIcon,
    color: 'text-green-500 hover:text-green-400',
    bgHover: 'hover:bg-green-500/10',
    borderHover: 'hover:border-green-500/30',
    displayName: 'Node.js',
  },
  mongodb: {
    icon: MongodbIcon,
    color: 'text-emerald-600 hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-400',
    bgHover: 'hover:bg-emerald-600/10 dark:hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-600/30 dark:hover:border-emerald-500/30',
    displayName: 'MongoDB',
  },
  tensorflow: {
    icon: TensorflowIcon,
    color: 'text-orange-500 hover:text-orange-400',
    bgHover: 'hover:bg-orange-500/10',
    borderHover: 'hover:border-orange-500/30',
    displayName: 'TensorFlow',
  },
  datascience: {
    icon: DataScienceIcon,
    color: 'text-purple-500 hover:text-purple-400',
    bgHover: 'hover:bg-purple-500/10',
    borderHover: 'hover:border-purple-500/30',
    displayName: 'Data Science',
  },
  nextjs: {
    icon: NextjsIcon,
    color: 'text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300',
    bgHover: 'hover:bg-neutral-500/10',
    borderHover: 'hover:border-neutral-500/30',
    displayName: 'Next.js',
  },
  prisma: {
    icon: Hexagon,
    color: "text-slate-500 hover:text-slate-400 dark:text-slate-300 dark:hover:text-slate-100",
    bgHover: "hover:bg-slate-500/10",
    borderHover: "hover:border-slate-500/30",
    displayName: "Prisma",
  },
  googlegemini: {
    icon: Sparkles,
    color: "text-indigo-500 hover:text-indigo-400",
    bgHover: "hover:bg-indigo-500/10",
    borderHover: "hover:border-indigo-500/30",
    displayName: "Google Gemini",
  },
  redis: {
    icon: RedisIcon,
    color: 'text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400',
    bgHover: 'hover:bg-red-500/10',
    borderHover: 'hover:border-red-500/30',
    displayName: 'Redis',
  },
  stripe: {
    icon: StripeIcon,
    color: 'text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300',
    bgHover: 'hover:bg-blue-600/10 dark:hover:bg-blue-400/10',
    borderHover: 'hover:border-blue-600/30 dark:hover:border-blue-400/30',
    displayName: 'Stripe',
  },
  postgresql: {
    icon: PostgresIcon,
    color: 'text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300',
    bgHover: 'hover:bg-cyan-600/10 dark:hover:bg-cyan-400/10',
    borderHover: 'hover:border-cyan-600/30 dark:hover:border-cyan-400/30',
    displayName: 'PostgreSQL',
  },
  typescript: {
    icon: TypescriptIcon,
    color: 'text-blue-500 hover:text-blue-400',
    bgHover: 'hover:bg-blue-500/10',
    borderHover: 'hover:border-blue-500/30',
    displayName: 'TypeScript',
  },
  javascript: {
    icon: JavascriptIcon,
    color: 'text-yellow-500 hover:text-yellow-400',
    bgHover: 'hover:bg-yellow-500/10',
    borderHover: 'hover:border-yellow-500/30',
    displayName: 'JavaScript',
  },
  graphql: {
    icon: GraphqlIcon,
    color: 'text-pink-500 hover:text-pink-400',
    bgHover: 'hover:bg-pink-500/10',
    borderHover: 'hover:border-pink-500/30',
    displayName: 'GraphQL',
  },
  aws: {
    icon: AwsIcon,
    color: 'text-amber-600 hover:text-amber-500 dark:text-amber-500 dark:hover:text-amber-400',
    bgHover: 'hover:bg-amber-600/10 dark:hover:bg-amber-500/10',
    borderHover: 'hover:border-amber-600/30 dark:hover:border-amber-500/30',
    displayName: 'AWS',
  },
  cli: {
    icon: Terminal,
    color: 'text-neutral-500 hover:text-neutral-400',
    bgHover: 'hover:bg-neutral-500/10',
    borderHover: 'hover:border-neutral-500/30',
    displayName: 'CLI',
  },
  opensource: {
    icon: Code,
    color: 'text-emerald-500 hover:text-emerald-400',
    bgHover: 'hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    displayName: 'Open Source',
  },
  pty: {
    icon: Terminal,
    color: 'text-indigo-500 hover:text-indigo-400',
    bgHover: 'hover:bg-indigo-500/10',
    borderHover: 'hover:border-indigo-500/30',
    displayName: 'PTY',
  },
  sessionpersistence: {
    icon: Code,
    color: 'text-violet-500 hover:text-violet-400',
    bgHover: 'hover:bg-violet-500/10',
    borderHover: 'hover:border-violet-500/30',
    displayName: 'Session Persistence',
  },
  sqlite: {
    icon: SqliteIcon,
    color: 'text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300',
    bgHover: 'hover:bg-sky-600/10 dark:hover:bg-sky-400/10',
    borderHover: 'hover:border-sky-600/30 dark:hover:border-sky-400/30',
    displayName: 'SQLite',
  },
  vps: {
    icon: VpsIcon,
    color: 'text-emerald-500 hover:text-emerald-400',
    bgHover: 'hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    displayName: 'VPS',
  },
  devops: {
    icon: DevOpsIcon,
    color: 'text-purple-500 hover:text-purple-400',
    bgHover: 'hover:bg-purple-500/10',
    borderHover: 'hover:border-purple-500/30',
    displayName: 'DevOps',
  },
  docker: {
    icon: DockerIcon,
    color: 'text-sky-500 hover:text-sky-400',
    bgHover: 'hover:bg-sky-500/10',
    borderHover: 'hover:border-sky-500/30',
    displayName: 'Docker',
  },
  linux: {
    icon: LinuxIcon,
    color: 'text-amber-500 hover:text-amber-400',
    bgHover: 'hover:bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    displayName: 'Linux',
  },
  cloud: {
    icon: CloudIcon,
    color: 'text-blue-500 hover:text-blue-400',
    bgHover: 'hover:bg-blue-500/10',
    borderHover: 'hover:border-blue-500/30',
    displayName: 'Cloud',
  },
  deployment: {
    icon: DeploymentIcon,
    color: 'text-rose-500 hover:text-rose-400',
    bgHover: 'hover:bg-rose-500/10',
    borderHover: 'hover:border-rose-500/30',
    displayName: 'Deployment',
  },
  infrastructure: {
    icon: InfrastructureIcon,
    color: 'text-teal-500 hover:text-teal-400',
    bgHover: 'hover:bg-teal-500/10',
    borderHover: 'hover:border-teal-500/30',
    displayName: 'Infrastructure',
  },
}

interface SkillIconProps {
  name: string
}

export function SkillIcon({ name }: SkillIconProps) {
  // Normalize the name to find in map
  const normalizedKey = name.toLowerCase().trim().replace(/[\s-.]/g, '')
  const config = TECH_MAP[normalizedKey]

  const IconComponent = config ? config.icon : Code
  const displayName = config ? config.displayName : name
  
  // Custom Tailwind configurations for dynamic styles
  const textClass = config ? config.color : 'text-muted-foreground hover:text-foreground'
  const bgClass = config ? config.bgHover : 'hover:bg-secondary'
  const borderClass = config ? config.borderHover : 'hover:border-border'

  return (
    <span
      className={`group inline-flex items-center justify-start h-7 px-2.5 py-1 rounded-md bg-secondary/30 text-xs font-medium border border-border/40 select-none cursor-default transition-all duration-300 ease-out ${textClass} ${bgClass} ${borderClass}`}
    >
      <span className="flex items-center justify-center shrink-0">
        <IconComponent />
      </span>
      <span
        className="max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden whitespace-nowrap ml-0 group-hover:ml-1.5 font-semibold"
      >
        {displayName}
      </span>
    </span>
  )
}


export function getTagIcon(name: string) {
  const normalizedKey = name.toLowerCase().trim().replace(/[\s-.]/g, "")
  return TECH_MAP[normalizedKey]?.icon
}

export function getTagStyles(name: string) {
  const normalizedKey = name.toLowerCase().trim().replace(/[\s-.]/g, '')
  const config = TECH_MAP[normalizedKey]
  
  const defaults = {
    color: 'text-muted-foreground hover:text-foreground',
    activeBg: 'bg-secondary/40',
    activeBorder: 'border-border/40',
    activeText: 'text-foreground',
    inactiveBg: 'bg-secondary/10',
    inactiveBorder: 'border-border/20',
    displayName: name
  }

  if (!config) return defaults

  const activeColorMap: Record<string, { bg: string, border: string, text: string }> = {
    python: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-500 dark:text-amber-400' },
    fastapi: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-500' },
    react: { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-500' },
    reactflow: { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-500" },
    zustand: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-500" },
    pydantic: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-500" },
    restapis: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500" },
    mcp: { bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", text: "text-fuchsia-500" },
    apis: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500" },
    ai: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-500" },
    career: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-500" },
    programming: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500" },
    softwareengineering: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500" },
    technology: { bg: "bg-slate-500/10", border: "border-slate-500/30", text: "text-slate-500 dark:text-slate-300" },
    tailwindcss: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-500' },
    websocket: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-500' },
    nodejs: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-500' },
    mongodb: { bg: 'bg-emerald-600/10 dark:bg-emerald-500/10', border: 'border-emerald-600/30 dark:border-emerald-500/30', text: 'text-emerald-600 dark:text-emerald-500' },
    prisma: { bg: "bg-slate-500/10", border: "border-slate-500/30", text: "text-slate-500 dark:text-slate-300" },
    googlegemini: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-500" },
    redis: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-500' },
    typescript: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
    javascript: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-500' },
    graphql: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-500' },
    aws: { bg: 'bg-amber-600/10 dark:bg-amber-500/10', border: 'border-amber-600/30 dark:border-amber-500/30', text: 'text-amber-600 dark:text-amber-500' },
    sqlite: { bg: 'bg-sky-600/10 dark:bg-sky-500/10', border: 'border-sky-600/30 dark:border-sky-500/30', text: 'text-sky-600 dark:text-sky-500' },
    nextjs: { bg: 'bg-neutral-500/10', border: 'border-neutral-500/30', text: 'text-neutral-900 dark:text-neutral-100' },
    vps: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-500' },
    devops: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-500' },
    docker: { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-500' },
    linux: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-500' },
    cloud: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
    deployment: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-500' },
    infrastructure: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-500' },
  }

  const mapped = activeColorMap[normalizedKey] || {
    bg: 'bg-secondary/40',
    border: 'border-border/40',
    text: 'text-foreground'
  }

  return {
    color: config.color,
    activeBg: mapped.bg,
    activeBorder: mapped.border,
    activeText: mapped.text,
    inactiveBg: 'bg-secondary/10',
    inactiveBorder: 'border-border/20',
    displayName: config.displayName
  }
}
