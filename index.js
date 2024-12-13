//step 1: quize data
const quizData = [
    {
        question: "The term 'Computer' is derived from...",
        options: [
            "A) Latin",
            "B) German",
            "C) French",
            "D) Arabic"
        ],
        correct: 0
    },
    {
        question: "Who is the inventor of the 'Difference Engine'?",
        options: [
            "A) Allen Turing",
            "B) Charles Babbage",
            "C) Simur Cray",
            "D) Augusta Adaming"
        ],
        correct: 1
    },
    {
        question: "Who is the father of the Computer?",
        options: [
            "A) Allen Turing",
            "B) Charles Babbage",
            "C) Simur Cray",
            "D) Augusta Adaming"
        ],
        correct: 1
    },
    {
        question: "Who is the father of Computer Science?",
        options: [
            "A) Allen Turing",
            "B) Charles Babbage",
            "C) Simur Cray",
            "D) Augusta Adaming"
        ],
        correct: 0
    },
    {
        question: "Who is the father of the Personal Computer?",
        options: [
            "A) Edward Roberts",
            "B) Allen Turing",
            "C) Charles Babbage",
            "D) None of these"
        ],
        correct: 0
    },
    {
        question: "A computer contains...",
        options: [
            "A) A card reader and a printing device",
            "B) An analytical engine and a control unit",
            "C) A control unit and an arithmetic logic unit",
            "D) An arithmetic logic unit and a card reader"
        ],
        correct: 2
    },
    {
        question: "Which of the following controls the process of interaction between the user and the operating system?",
        options: [
            "A) User interface",
            "B) Language translator",
            "C) Platform",
            "D) Screen saver"
        ],
        correct: 0
    },
    {
        question: "The first computers were programmed using...",
        options: [
            "A) Assembly language",
            "B) Machine language",
            "C) Source code",
            "D) Object code"
        ],
        correct: 1
    },
    {
        question: "A network is a combination of hardware and software that facilitates the sharing of information between computing devices.",
        options: [
            "A) Network",
            "B) Peripheral",
            "C) Expansion board"
        ],
        correct: 0
    },
    {
        question: "Coded entries used to gain access to a computer system are called...",
        options: [
            "A) Entry codes",
            "B) Passwords",
            "C) Security commands",
            "D) Code words"
        ],
        correct: 1
    },
    {
        question: "You organize files by storing them in...",
        options: [
            "A) Archives",
            "B) Folders",
            "C) Indexes",
            "D) Lists"
        ],
        correct: 1
    },
    {
        question: "Which device is required for an Internet connection?",
        options: [
            "A) Joystick",
            "B) Modem",
            "C) CD drive",
            "D) NIC card"
        ],
        correct: 1
    },
    {
        question: "What is a light pen?",
        options: [
            "A) Mechanical input device",
            "B) Optical input device",
            "C) Electronic input device",
            "D) Optical output device"
        ],
        correct: 1
    },
    {
        question: "CD-ROM stands for...",
        options: [
            "A) Compactable Read-Only Memory",
            "B) Compact Disk Read-Only Memory",
            "C) Compact Data Read-Only Memory",
            "D) Compactable Disk Read-Only Memory"
        ],
        correct: 1
    },
    {
        question: "VGA stands for...",
        options: [
            "A) Video Graphics Array",
            "B) Visual Graphics Array",
            "C) Volatile Graphics Array",
            "D) Video Graphics Adapter"
        ],
        correct: 0
    },
    {
        question: "Who designed the first electronics computer, ENIAC?",
        options: [
            "A) Van-Neumann",
            "B) Joseph M. Jacquard",
            "C) J. Presper Eckert and John W. Mauchly",
            "D) Charles Babbage"
        ],
        correct: 2
    },
    {
        question: "Who invented the high-level language 'C'?",
        options: [
            "A) Seymour Papert",
            "B) Dennis M. Ritchie",
            "C) Niklaus Wirth",
            "D) Donald Knuth"
        ],
        correct: 1
    },
    {
        question: "People who design, program, operate, and maintain computer equipment are referred to as?",
        options: [
            "A) Console operator",
            "B) Programmer",
            "C) Peopleware",
            "D) System analyst"
        ],
        correct: 2
    },
    {
        question: "When did arch rivals IBM and Apple Computers decide to join hands?",
        options: [
            "A) 1978",
            "B) 1984",
            "C) 1990",
            "D) 1991"
        ],
        correct: 3
    },
    {
        question: "Human beings are referred to as Homo sapiens. Which device is called Sillico Sapiens?",
        options: [
            "A) Monitor",
            "B) Hardware",
            "C) Robot",
            "D) Computer"
        ],
        correct: 3
    },
    {
        question: "An error in software or hardware is called a bug. What is the alternative computer jargon for it?",
        options: [
            "A) Leech",
            "B) Squid",
            "C) Slug",
            "D) Glitch"
        ],
        correct: 3
    },
    {
        question: "Modern Computers are very reliable but they are not:",
        options: [
            "A) Fast",
            "B) Powerful",
            "C) Infallible",
            "D) Cheap"
        ],
        correct: 2
    },
    {
        question: "What is the name of the display feature that highlights an area of the screen requiring operator attention?",
        options: [
            "A) Pixel",
            "B) Reverse video",
            "C) Touch screen",
            "D) Cursor"
        ],
        correct: 1
    },
    {
        question: "Personal computers use a number of chips mounted on a main circuit board. What is the common name for such boards?",
        options: [
            "A) Daughterboard",
            "B) Motherboard",
            "C) Fatherboard",
            "D) Breadboard"
        ],
        correct: 1
    },
    {
        question: "In most IBM PCs, the CPU, the device drives, memory expansion slots, and active components are mounted on a single board. What is this board called?",
        options: [
            "A) Motherboard",
            "B) System board",
            "C) Breadboard",
            "D) Circuit board"
        ],
        correct: 0
    },
    {
        question: "What is meant by a dedicated computer?",
        options: [
            "A) Which is used by one person only",
            "B) Which is assigned to one and only one task",
            "C) Which does not have an operating system",
            "D) Which uses one kind of software"
        ],
        correct: 1
    },
    {
        question: "Who is the chief of Microsoft?",
        options: [
            "A) Babbage",
            "B) Bill Gates",
            "C) Bill Clinton",
            "D) None of these"
        ],
        correct: 1
    },
    {
        question: "The capacity of 3.5-inch floppy disks is:",
        options: [
            "A) 1.40 MB",
            "B) 1.44 GB",
            "C) 1.40 GB",
            "D) 1.44 MB"
        ],
        correct: 3
    },
    {
        question: "WAN stands for:",
        options: [
            "A) Wireless Area Network",
            "B) Wide Area Network",
            "C) Wide Array Network",
            "D) Wireless Array Network"
        ],
        correct: 1
    },
    {
        question: "Which computer memory is non-volatile?",
        options: [
            "A) SRAM",
            "B) DRAM",
            "C) ROM",
            "D) All of the above"
        ],
        correct: 2
    },
    {
        question: "EBCDIC stands for:",
        options: [
            "A) Extended Binary Coded Decimal Interchange Code",
            "B) Extended Bit Code Decimal Interchange Code",
            "C) Extended Bit Case Decimal Interchange Code",
            "D) Extended Binary Case Decimal Interchange Code"
        ],
        correct: 0
    },
    {
        question: "Which of the following is an example of a supercomputer?",
        options: [
            "A) IBM PC",
            "B) CRAY-1",
            "C) Laptop",
            "D) Notebook"
        ],
        correct: 1
    },
    {
        question: "Which programming language is used to create programs like applets?",
        options: [
            "A) COBOL",
            "B) C++",
            "C) Java",
            "D) BASIC"
        ],
        correct: 2
    },
    {
        question: "What does the acronym 'ISDN' stand for?",
        options: [
            "A) Integrated Services Digital Network",
            "B) International Services Digital Network",
            "C) Integrated Software Digital Network",
            "D) None of the above"
        ],
        correct: 0
    },
    {
        question: "The brain of any computer system is:",
        options: [
            "A) ALU",
            "B) Memory",
            "C) CPU",
            "D) Control Unit"
        ],
        correct: 2
    },
    {
        question: "Storage capacity of a magnetic disk depends on:",
        options: [
            "A) Tracks per inch of surface",
            "B) Bits per inch of tracks",
            "C) Disk pack in the disk surface",
            "D) All of the above"
        ],
        correct: 3
    },
    {
        question: "ASCII stands for:",
        options: [
            "A) American Standard Code for Information Interchange",
            "B) American Standard Code for Intelligent Interchange",
            "C) American Standard Code for Information Integrity",
            "D) American Standard Code for Information Improvement"
        ],
        correct: 0
    },
    {
        question: "A compiler is used to translate a program written in:",
        options: [
            "A) High-level language to Machine level",
            "B) Machine level to High-level language",
            "C) Assembly language to Machine level",
            "D) None of the above"
        ],
        correct: 0
    },
    {
        question: "Which part of the computer is responsible for processing data?",
        options: [
            "A) Motherboard",
            "B) Memory",
            "C) CPU",
            "D) Hard drive"
        ],
        correct: 2
    },
    {
        question: "What type of device is a computer printer?",
        options: [
            "A) Input",
            "B) Output",
            "C) Software",
            "D) Storage"
        ],
        correct: 1
    },
    {
        question: "Which of the following is not an output device?",
        options: [
            "A) Printer",
            "B) Monitor",
            "C) Speaker",
            "D) Scanner"
        ],
        correct: 3
    },
    {
        question: "The term 'bit' is short for:",
        options: [
            "A) Binary digit",
            "B) Binary term",
            "C) Binary node",
            "D) Binary table"
        ],
        correct: 0
    },
    {
        question: "Which of the following storage devices can store the maximum amount of data?",
        options: [
            "A) Floppy disk",
            "B) Hard disk",
            "C) Compact disk",
            "D) Magneto-optic disk"
        ],
        correct: 1
    },
    {
        question: 'The term "BIOS" stands for:',
        options: ['(a) Basic Input Output System', '(b) Binary Input Output System', '(c) Binary Integrated Operating System', '(d) Basic Integrated Operating System'],
        correct: 0
    },
    {
        question: 'The term "booting" refers to:',
        options: ['(a) Installing a new operating system', '(b) Turning on the computer and loading the operating system', '(c) Closing the operating system', '(d) Rebooting a program'],
        correct: 1
    },
    {
        question: 'Which of the following is the smallest unit of data in a computer?',
        options: ['(a) Byte', '(b) Bit', '(c) Kilobyte', '(d) Megabyte'],
        correct: 1
    },
    {
        question: 'Which of the following storage devices is non-volatile?',
        options: ['(a) RAM', '(b) Cache', '(c) Hard disk', '(d) Register'],
        correct: 2
    },
    {
        question: 'Which is the main function of the control unit (CU)?',
        options: ['(a) Store data', '(b) Perform arithmetic operations', '(c) Direct the operations of the processor', '(d) Store instructions'],
        correct: 2
    },
    {
        question: 'Which of the following is the fastest type of memory?',
        options: ['(a) RAM', '(b) Cache memory', '(c) ROM', '(d) Hard drive'],
        correct: 1
    },
    {
        question: 'The first computer virus created was:',
        options: ['(a) ILOVEYOU', '(b) Brain', '(c) Code Red', '(d) Melissa'],
        correct: 1
    },
    {
        question: 'The "mouse" device is an example of a:',
        options: ['(a) Storage device', '(b) Pointing device', '(c) Input device', '(d) Both (b) and (c)'],
        correct: 3
    },
    {
        question: 'Which of the following is an example of an operating system?',
        options: ['(a) Microsoft Word', '(b) Linux', '(c) Adobe Photoshop', '(d) Google Chrome'],
        correct: 1
    },
    {
        question: 'Which generation of computers used punched cards for input and output?',
        options: ['(a) First generation', '(b) Second generation', '(c) Third generation', '(d) Fourth generation'],
        correct: 0
    },
    {
        question: 'Which of the following is the first electronic general-purpose computer?',
        options: ['(a) ENIAC', '(b) UNIVAC', '(c) IBM 1401', '(d) MARK I'],
        correct: 0
    },
    {
        question: 'Which device is used to convert digital data to analog data?',
        options: ['(a) Modem', '(b) Router', '(c) Repeater', '(d) Network card'],
        correct: 0
    },
    {
        question: 'Which of the following is not a computer programming language?',
        options: ['(a) Java', '(b) C++', '(c) Python', '(d) Microsoft Word'],
        correct: 3
    },
    {
        question: 'What does the acronym "URL" stand for?',
        options: ['(a) Uniform Resource Locator', '(b) Unified Resource Locator', '(c) Uniform Real-time Locator', '(d) Universal Resource Locator'],
        correct: 0
    },
    {
        question: 'Which of the following is an example of an output device?',
        options: ['(a) Keyboard', '(b) Mouse', '(c) Monitor', '(d) Scanner'],
        correct: 2
    },
    {
        question: 'The main purpose of an operating system is to:',
        options: ['(a) Perform arithmetic calculations', '(b) Manage hardware resources', '(c) Run applications', '(d) Store data'],
        correct: 1
    },
    {
        question: 'Which of the following is not a type of software?',
        options: ['(a) Application software', '(b) System software', '(c) Utility software', '(d) Hardware'],
        correct: 3
    },
    {
        question: 'Which of the following is an example of a primary memory?',
        options: ['(a) Hard disk', '(b) RAM', '(c) CD-ROM', '(d) DVD'],
        correct: 1
    },
    {
        question: 'Which of the following best describes a computer virus?',
        options: ['(a) A hardware malfunction', '(b) A program that replicates and spreads itself', '(c) A type of computer memory', '(d) A type of input device'],
        correct: 1
    },
    {
        question: 'Which of the following is used to store data permanently?',
        options: ['(a) RAM', '(b) ROM', '(c) Cache memory', '(d) CPU register'],
        correct: 1
    },
    {
        question: 'Which of the following is used as the main memory in a computer system?',
        options: ['(a) Magnetic disk', '(b) RAM', '(c) Hard disk', '(d) Flash drive'],
        correct: 1
    },
    {
        question: 'Which generation of computers introduced integrated circuits (ICs)?',
        options: ['(a) First generation', '(b) Second generation', '(c) Third generation', '(d) Fourth generation'],
        correct: 2
    },
    {
        question: 'The term "HTTP" stands for:',
        options: ['(a) HyperText Transfer Protocol', '(b) HyperText Transaction Protocol', '(c) HyperTool Transfer Protocol', '(d) High Text Transfer Protocol'],
        correct: 0
    },
    {
        question: 'Which of the following is the largest unit of data storage?',
        options: ['(a) Byte', '(b) Kilobyte', '(c) Megabyte', '(d) Terabyte'],
        correct: 3
    },
    {
        question: 'Which type of software helps to manage the computer’s hardware and software resources?',
        options: ['(a) System software', '(b) Application software', '(c) Utility software', '(d) Compiler'],
        correct: 0
    },
    {
        question: 'Which of the following is the first computer to use a graphical user interface (GUI)?',
        options: ['(a) ENIAC', '(b) Macintosh', '(c) UNIVAC', '(d) IBM PC'],
        correct: 1
    },
    {
        question: 'Which of the following is not an input device?',
        options: ['(a) Keyboard', '(b) Mouse', '(c) Microphone', '(d) Printer'],
        correct: 3
    },
    {
        question: 'Which type of memory is used for permanent storage of data?',
        options: ['(a) ROM', '(b) RAM', '(c) Cache', '(d) Flash memory'],
        correct: 0
    },
    {
        question: 'Which of the following is used to connect different computers in a network?',
        options: ['(a) Router', '(b) Keyboard', '(c) Monitor', '(d) Printer'],
        correct: 0
    },
    {
        question: 'Which of the following is a function of an operating system?',
        options: ['(a) Managing memory', '(b) Compiling code', '(c) Running applications', '(d) All of the above'],
        correct: 3
    },
    {
        question: "The term 'BIOS' stands for:",
        options: ["(a) Basic Input Output System", "(b) Binary Input Output System", "(c) Binary Integrated Operating System", "(d) Basic Integrated Operating System"],
        correct: 0
    },
    {
        question: "The term 'booting' refers to:",
        options: ["(a) Installing a new operating system", "(b) Turning on the computer and loading the operating system", "(c) Closing the operating system", "(d) Rebooting a program"],
        correct: 1
    },
    {
        question: "Which of the following is the smallest unit of data in a computer?",
        options: ["(a) Byte", "(b) Bit", "(c) Kilobyte", "(d) Megabyte"],
        correct: 1
    },
    {
        question: "Which of the following storage devices is non-volatile?",
        options: ["(a) RAM", "(b) Cache", "(c) Hard disk", "(d) Register"],
        correct: 2
    },
    {
        question: "Which is the main function of the control unit (CU)?",
        options: ["(a) Store data", "(b) Perform arithmetic operations", "(c) Direct the operations of the processor", "(d) Store instructions"],
        correct: 2
    },
    {
        question: "Which of the following is the fastest type of memory?",
        options: ["(a) RAM", "(b) Cache memory", "(c) ROM", "(d) Hard drive"],
        correct: 1
    },
    {
        question: "The first computer virus created was:",
        options: ["(a) ILOVEYOU", "(b) Brain", "(c) Code Red", "(d) Melissa"],
        correct: 1
    },
    {
        question: "The 'mouse' device is an example of a:",
        options: ["(a) Storage device", "(b) Pointing device", "(c) Input device", "(d) Both (b) and (c)"],
        correct: 3
    },
    {
        question: "Which of the following is an example of an operating system?",
        options: ["(a) Microsoft Word", "(b) Linux", "(c) Adobe Photoshop", "(d) Google Chrome"],
        correct: 1
    },
    {
        question: "Which generation of computers used punched cards for input and output?",
        options: ["(a) First generation", "(b) Second generation", "(c) Third generation", "(d) Fourth generation"],
        correct: 0
    },
    {
        question: "Which of the following is the first electronic general-purpose computer?",
        options: ["(a) ENIAC", "(b) UNIVAC", "(c) IBM 1401", "(d) MARK I"],
        correct: 0
    },
    {
        question: "Which device is used to convert digital data to analog data?",
        options: ["(a) Modem", "(b) Router", "(c) Repeater", "(d) Network card"],
        correct: 0
    },
    {
        question: "Which of the following is not a computer programming language?",
        options: ["(a) Java", "(b) C++", "(c) Python", "(d) Microsoft Word"],
        correct: 3
    },
    {
        question: "What does the acronym 'URL' stand for?",
        options: ["(a) Uniform Resource Locator", "(b) Unified Resource Locator", "(c) Uniform Real-time Locator", "(d) Universal Resource Locator"],
        correct: 0
    },
    {
        question: "Which of the following is an example of an output device?",
        options: ["(a) Keyboard", "(b) Mouse", "(c) Monitor", "(d) Scanner"],
        correct: 2
    },
    {
        question: "The main purpose of an operating system is to:",
        options: ["(a) Perform arithmetic calculations", "(b) Manage hardware resources", "(c) Run applications", "(d) Store data"],
        correct: 1
    },
    {
        question: "Which of the following is not a type of software?",
        options: ["(a) Application software", "(b) System software", "(c) Utility software", "(d) Hardware"],
        correct: 3
    },
    {
        question: "Which of the following is an example of a primary memory?",
        options: ["(a) Hard disk", "(b) RAM", "(c) CD-ROM", "(d) DVD"],
        correct: 1
    },
    {
        question: "Which of the following best describes a computer virus?",
        options: ["(a) A hardware malfunction", "(b) A program that replicates and spreads itself", "(c) A type of computer memory", "(d) A type of input device"],
        correct: 1
    },
    {
        question: "Which of the following is used to store data permanently?",
        options: ["(a) RAM", "(b) ROM", "(c) Cache memory", "(d) CPU register"],
        correct: 1
    },
    {
        question: "Which of the following is used as the main memory in a computer system?",
        options: ["(a) Magnetic disk", "(b) RAM", "(c) Hard disk", "(d) Flash drive"],
        correct: 1
    },
    {
        question: "Which generation of computers introduced integrated circuits (ICs)?",
        options: ["(a) First generation", "(b) Second generation", "(c) Third generation", "(d) Fourth generation"],
        correct: 2
    },
    {
        question: "The term 'HTTP' stands for:",
        options: ["(a) HyperText Transfer Protocol", "(b) HyperText Transaction Protocol", "(c) HyperTool Transfer Protocol", "(d) High Text Transfer Protocol"],
        correct: 0
    },
    {
        question: "Which of the following is the largest unit of data storage?",
        options: ["(a) Byte", "(b) Kilobyte", "(c) Megabyte", "(d) Terabyte"],
        correct: 3
    },
    {
        question: "Which type of software helps to manage the computer’s hardware and software resources?",
        options: ["(a) System software", "(b) Application software", "(c) Utility software", "(d) Compiler"],
        correct: 0
    },
    {
        question: "Which of the following is the first computer to use a graphical user interface (GUI)?",
        options: ["(a) ENIAC", "(b) Macintosh", "(c) UNIVAC", "(d) IBM PC"],
        correct: 1
    },
    {
        question: "Which of the following is not an input device?",
        options: ["(a) Keyboard", "(b) Mouse", "(c) Microphone", "(d) Printer"],
        correct: 3
    },
    {
        question: "Which type of memory is used for permanent storage of data?",
        options: ["(a) ROM", "(b) RAM", "(c) Cache", "(d) Flash memory"],
        correct: 0
    },
    {
        question: "Which of the following is used to connect different computers in a network?",
        options: ["(a) Router", "(b) Keyboard", "(c) Monitor", "(d) Printer"],
        correct: 0
    },
    {
        question: "Which of the following is a function of an operating system?",
        options: ["(a) Managing memory", "(b) Compiling code", "(c) Running applications", "(d) All of the above"],
        correct: 3
    },
    {
        question: "Which of the following is not a basic function of a computer?",
        options: ["Store data", "Accept input", "Process data", "Copy text"],
        correct: 3
    },
    {
        question: "Which part of the computer is directly involved in executing instructions?",
        options: ["The scanner", "The main storage", "The secondary storage", "The processor"],
        correct: 3
    },
    {
        question: "Which of the following is the smallest storage?",
        options: ["Megabyte", "Gigabyte", "Terabyte", "None of these"],
        correct: 3
    },
    {
        question: "What is the name of an application program that gathers user information and sends it to someone over the Internet?",
        options: ["Spybot", "Malware", "Worm", "Trojan horse"],
        correct: 1
    },
    {
        question: "Which of the following is not an input device?",
        options: ["Optical scanner", "Microphone", "Keyboard", "Printer"],
        correct: 3
    },
    {
        question: "The floating-point numbers representable in two 16-bit words of a computer is approximately:",
        options: ["16 digits", "6 digits", "9 digits", "All of the above"],
        correct: 1
    },
    {
        question: "Most of the data in a computer is stored as:",
        options: ["Binary", "Decimal", "Hexadecimal", "Octal"],
        correct: 0
    },
    {
        question: "The term used for the measurement of things such as fingerprints and retinal scans used for security access:",
        options: ["Bio-metric measurement", "Bio-feedback", "Bio-enhancement", "Bio-processor"],
        correct: 0
    },
    {
        question: "The most common types of memory used in modern computers include:",
        options: ["RAM", "ROM", "Flash", "All of the above"],
        correct: 3
    },
    {
        question: "Which of the following is a type of software?",
        options: ["Hardware", "Operating system", "Monitor", "Printer"],
        correct: 1
    },
    {
        question: "A 'bit' is short for:",
        options: ["Binary Information Transmission", "Binary Digit", "Binary Interchange Time", "Base Information Term"],
        correct: 1
    },
    {
        question: "Which of the following is true about a 'bug' in software?",
        options: ["A bug is a fault or flaw in the program", "A bug is an error caused by the user", "Bugs are eliminated during the testing phase", "Bugs do not affect the functionality of a program"],
        correct: 0
    },
    {
        question: "The first web browser was:",
        options: ["Mosaic", "Internet Explorer", "Netscape Navigator", "Google Chrome"],
        correct: 0
    },
    {
        question: "The acronym 'HTTP' stands for:",
        options: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Terminal Text Protocol", "None of the above"],
        correct: 0
    },
    {
        question: "What is an example of non-volatile memory?",
        options: ["RAM", "Cache memory", "Hard disk", "Register"],
        correct: 2
    },
    {
        question: "Which of the following devices is used to connect two or more computers in a network?",
        options: ["Switch", "Router", "Hub", "All of the above"],
        correct: 3
    },
    {
        question: "Which of the following is NOT a network protocol?",
        options: ["TCP/IP", "HTTP", "SMTP", "RAM"],
        correct: 3
    },
    {
        question: "The operating system manages:",
        options: ["Hardware resources", "Software applications", "User interfaces", "All of the above"],
        correct: 3
    },
    {
        question: "Which of the following is an example of an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        correct: 1
    },
    {
        question: "What does 'URL' stand for?",
        options: ["Uniform Resource Locator", "Uniform Real-time Locator", "Unified Resource Locator", "Universal Resource Locator"],
        correct: 0
    },
    {
        question: "In computer terminology, the full form of 'GIF' is:",
        options: ["General Interchange Format", "Graphical Interface Format", "Graphical Interchange Format", "General Interface Format"],
        correct: 2
    },
    {
        question: "Which of the following is the primary function of the ALU (Arithmetic Logic Unit)?",
        options: ["Performing calculations", "Moving data between registers", "Managing the computer’s memory", "Controlling input and output operations"],
        correct: 0
    },
    {
        question: "What is the smallest unit of data in a computer system?",
        options: ["Bit", "Byte", "Word", "Character"],
        correct: 0
    },
    {
        question: "The term 'cloud computing' refers to:",
        options: ["A method of storing data on the internet", "A method of processing data locally", "A method of creating software", "A method of securing data"],
        correct: 0
    },
    {
        question: "Which of the following is a secondary storage device?",
        options: ["RAM", "CPU", "Hard disk", "Cache"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a type of software?",
        options: ["System Software", "Application Software", "Utility Software", "Hardware Software"],
        correct: 3
    },
    {
        question: "What does the acronym 'BIOS' stand for in relation to a computer system?",
        options: ["Basic Integrated Operating System", "Basic Input Output System", "Binary Input Output System", "Basic Intelligent Operating System"],
        correct: 1
    },
    {
        question: "What is the primary purpose of a firewall in computer security?",
        options: ["To store data securely", "To encrypt internet traffic", "To block unauthorized access to or from a private network", "To increase internet speed"],
        correct: 2
    },
    {
        question: "Which of the following is used to uniquely identify a device in a network?",
        options: ["MAC address", "IP address", "Subnet mask", "Gateway"],
        correct: 0
    },
    {
        question: "What is the primary function of a database index?",
        options: ["To encrypt data in the database", "To speed up data retrieval", "To store backup data", "To manage user access permissions"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a common type of loop in programming?",
        options: ["For loop", "While loop", "Do-while loop", "Until loop"],
        correct: 3
    },
    {
        question: "Which of the following is NOT an example of a relational database management system (RDBMS)?",
        options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
        correct: 2
    },
    {
        question: "In object-oriented programming, the term ‘encapsulation’ refers to:",
        options: ["The process of inheritance", "Wrapping data and methods together as a single unit", "The process of method overloading", "The process of class abstraction"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a valid HTML tag?",
        options: ["<div>", "<span>", "<section>", "<content>"],
        correct: 3
    },
    {
        question: "In the context of computer security, what does the term ‘phishing’ refer to?",
        options: ["The act of stealing a person’s identity", "The process of tracking a user’s browsing history", "A type of online fraud to steal sensitive information", "The act of creating a fake website"],
        correct: 2
    },
    {
        question: "Which of the following is a type of malware designed to replicate itself and spread to other systems?",
        options: ["Virus", "Trojan horse", "Worm", "Spyware"],
        correct: 2
    },
    {
        question: "Which technology is used to design and develop responsive websites that work on various devices?",
        options: ["HTML5", "JavaScript", "CSS3", "PHP"],
        correct: 2
    },
    {
        question: "Which of the following is NOT an operating system?",
        options: ["Linux", "Android", "Windows", "Chrome"],
        correct: 3
    },
    {
        question: "Which of the following is a version control system that helps manage source code changes?",
        options: ["Git", "SVN", "Mercurial", "All of the above"],
        correct: 3
    },
    {
        question: "IBM was earlier known by a different name, which was changed in 1960. What was that name?",
        options: ["Tabulator Machine Co.", "Computing Tabulating Recording Co.", "The Tabulator Ltd.", "International Computer Ltd."],
        correct: 1
    },
    {
        question: "Before a disk drive can access any sector, a computer program has to provide the record’s disk address. What information does this address specify?",
        options: ["Track number", "Sector number", "Surface number", "All of the above"],
        correct: 3
    },
    {
        question: "Computers with an 80286 microprocessor are:",
        options: ["XT computers", "AT computers", "PS/2 computers", "None of the above"],
        correct: 1
    },
    {
        question: "An application suitable for payroll processing is:",
        options: ["Processing of grades", "Payroll processing", "Both (a) and (b)", "All of the above"],
        correct: 2
    },
    {
        question: "Which of the following is NOT processing?",
        options: ["Arranging", "Manipulating", "Calculating", "Gathering"],
        correct: 0
    },
    {
        question: "The digital computer was developed primarily in:",
        options: ["USSR", "Japan", "USA", "UK"],
        correct: 2
    },
    {
        question: "The number of addresses in RAM is specified by 16 bits. How many addresses will there be?",
        options: ["2^16", "65,536", "64K", "Any of the above"],
        correct: 1
    },
    {
        question: "Which of the following is used for manufacturing chips?",
        options: ["Bus", "Control unit", "Semiconductors", "A and B only"],
        correct: 2
    },
    {
        question: "The terminal device that functions as a cash register, computer terminal, and OCR reader is the:",
        options: ["Data collection terminal", "OCR register terminal", "Video display terminal", "POS terminal"],
        correct: 3
    },
    {
        question: "A set of flip-flops integrated together is called a:",
        options: ["Counter", "Adder", "Register", "None of the above"],
        correct: 2
    },
    {
        question: "Which generation of computers is still under development?",
        options: ["Fourth Generation", "Fifth Generation", "Sixth Generation", "Seventh Generation"],
        correct: 1
    },
    {
        question: "A register organized to allow left or right shift operations is called a:",
        options: ["Counter", "Loader", "Adder", "Shift register"],
        correct: 3
    },
    {
        question: "Which was the most popular first-generation computer?",
        options: ["IBM 1650", "IBM 360", "IBM 1130", "IBM 2700"],
        correct: 3
    },
    {
        question: "Which is considered a direct entry input device?",
        options: ["Optical scanner", "Mouse and digitizer", "Light pen", "All of the above"],
        correct: 3
    },
    {
        question: "A set of information that defines the status of resources allocated to a process is:",
        options: ["Process control", "ALU", "Register unit", "Process description"],
        correct: 3
    },
    {
        question: "What is required when more than one person uses a central computer at the same time?",
        options: ["Light pen", "Mouse", "Digitizer", "Terminal"],
        correct: 3
    },
    {
        question: "The first firm to mass-market a microcomputer as a personal computer was:",
        options: ["IBM", "Super UNIVAC", "Radio Shack", "Data General Corporation"],
        correct: 2
    },
    {
        question: "Which of the following is the first computer to use the Stored Program Concept?",
        options: ["UNIVAC", "ENIAC", "EDSAC", "None of the above"],
        correct: 2
    },
    {
        question: "Machine language is:",
        options: ["Machine dependent", "Difficult to program", "Error-prone", "All of the above"],
        correct: 3
    },
    {
        question: "A byte consists of:",
        options: ["One bit", "Four bits", "Eight bits", "Sixteen bits"],
        correct: 2
    },
    {
        question: "Modern computers are very reliable, but they are not:",
        options: ["Fast", "Powerful", "Infallible", "Cheap"],
        correct: 2
    },
    {
        question: "Which of the following is used as a primary storage device?",
        options: ["Magnetic Disk", "Optical Disk", "RAM", "CD-ROM"],
        correct: 2
    },
    {
        question: "What is the main purpose of an operating system?",
        options: ["Provide software for applications", "Manage hardware resources", "Translate user input into commands", "All of the above"],
        correct: 1
    },
    {
        question: "In a computer, a set of rods used for multiplication and division is known as:",
        options: ["Napier’s bones", "Slide rule", "Calculator rods", "Abacus"],
        correct: 0
    },
    {
        question: "Which of the following is a direct entry input device?",
        options: ["Optical scanner", "Keyboard", "Mouse", "All of the above"],
        correct: 3
    },
    {
        question: "Which type of memory is non-volatile and can be electrically erased and reprogrammed?",
        options: ["ROM", "RAM", "EEPROM", "Flash memory"],
        correct: 3
    },
    {
        question: "The control unit of a computer is responsible for:",
        options: ["Performing arithmetic calculations", "Managing data flow between memory and CPU", "Performing logical operations", "None of the above"],
        correct: 1
    },
    {
        question: "What does 'ASCII' stand for?",
        options: ["American Standard Code for Information Interchange", "American Synchronized Code for Information Interchange", "Advanced System Code for Information Interchange", "None of the above"],
        correct: 0
    },
    {
        question: "What type of computer is used for scientific calculations?",
        options: ["Personal computer", "Supercomputer", "Workstation", "Microcomputer"],
        correct: 1
    },
    {
        question: "Which of the following is a valid memory unit?",
        options: ["Byte", "Gigabyte", "Terabyte", "All of the above"],
        correct: 3
    },
    {
        question: "What is the primary function of the ALU (Arithmetic Logic Unit)?",
        options: ["Perform mathematical calculations", "Store data", "Process input and output", "Control data flow"],
        correct: 0
    },
    {
        question: "Which of the following was the first generation computer?",
        options: ["UNIVAC", "ENIAC", "IBM 1401", "PDP-8"],
        correct: 1
    },
    {
        question: "A mnemonic is a memory trick used in which of the following languages?",
        options: ["Machine language", "Assembly language", "High-level language", "None of the above"],
        correct: 1
    },
    {
        question: "The difference between memory and storage is that memory is:",
        options: ["Temporary, and storage is permanent", "Permanent, and storage is temporary", "Slow, and storage is fast", "Both are the same"],
        correct: 0
    },
    {
        question: "The first computer to use a stored program concept was:",
        options: ["ENIAC", "UNIVAC", "EDSAC", "None of the above"],
        correct: 2
    },
    {
        question: "What is an example of a fifth-generation computer?",
        options: ["IBM 360", "Cray-1", "Personal Computers", "Artificial Intelligence-based computers"],
        correct: 3
    },
    {
        question: "Which of the following statements is true about computer programs?",
        options: ["It is understood by a computer", "It is understood by the programmer", "It is understood by the user", "Both (a) and (b)"],
        correct: 3
    },
    {
        question: "Which of the following is the correct order of generation of computers?",
        options: ["First, second, third, fourth, fifth", "Second, first, third, fifth, fourth", "First, third, second, fourth, fifth", "First, second, fourth, third, fifth"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a type of software?",
        options: ["System software", "Application software", "Hardware software", "Utility software"],
        correct: 2
    },
    {
        question: "A primary characteristic of the fourth-generation computers is:",
        options: ["Use of vacuum tubes", "Use of transistors", "Use of integrated circuits (ICs)", "Use of artificial intelligence"],
        correct: 2
    },
    {
        question: "Which of the following is the main function of the Central Processing Unit (CPU)?",
        options: ["Execute instructions", "Store data", "Handle input and output operations", "All of the above"],
        correct: 0
    },
    {
        question: "Which type of memory is used to store data that can be accessed by the CPU directly?",
        options: ["ROM", "RAM", "Cache memory", "All of the above"],
        correct: 1
    },
    {
        question: "What is the primary function of the motherboard in a computer?",
        options: ["Store data", "Provide power", "Connect all components of the computer", "Display graphics"],
        correct: 2
    },
    {
        question: "Which of the following devices is used for both input and output?",
        options: ["Printer", "Monitor", "Touchscreen", "Scanner"],
        correct: 2
    },
    {
        question: "Which of the following is true about a compiler?",
        options: ["It translates high-level language into machine language", "It translates machine language into high-level language", "It is used to execute a program", "It executes instructions one by one"],
        correct: 0
    },
    {
        question: "The first microprocessor was developed by which company?",
        options: ["Intel", "IBM", "Microsoft", "Apple"],
        correct: 0
    },
    {
        question: "What does the acronym 'HTTP' stand for in the context of the web?",
        options: ["HyperText Transfer Protocol", "HyperText Technical Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol"],
        correct: 0
    },
    {
        question: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        correct: 1
    },
    {
        question: "Which of the following is an example of a non-volatile memory?",
        options: ["RAM", "ROM", "Cache memory", "All of the above"],
        correct: 1
    },
    {
        question: "Which of the following is a function of an operating system?",
        options: ["File management", "Process management", "Memory management", "All of the above"],
        correct: 3
    },
    {
        question: "Which generation of computers is associated with the use of Integrated Circuits (ICs)?",
        options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
        correct: 2
    },
    {
        question: "Which type of memory is used to store data that can be accessed by the CPU directly?",
        options: ["ROM", "RAM", "Cache memory", "All of the above"],
        correct: 1
    },
    {
        question: "What is the primary function of the motherboard in a computer?",
        options: ["Store data", "Provide power", "Connect all components of the computer", "Display graphics"],
        correct: 2
    },
    {
        question: "Which of the following devices is used for both input and output?",
        options: ["Printer", "Monitor", "Touchscreen", "Scanner"],
        correct: 2
    },
    {
        question: "Which of the following is true about a compiler?",
        options: ["It translates high-level language into machine language", "It translates machine language into high-level language", "It is used to execute a program", "It executes instructions one by one"],
        correct: 0
    },
    {
        question: "The first microprocessor was developed by which company?",
        options: ["Intel", "IBM", "Microsoft", "Apple"],
        correct: 0
    },
    {
        question: "What does the acronym 'HTTP' stand for in the context of the web?",
        options: ["HyperText Transfer Protocol", "HyperText Technical Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol"],
        correct: 0
    },
    {
        question: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        correct: 1
    },
    {
        question: "Which of the following is an example of a non-volatile memory?",
        options: ["RAM", "ROM", "Cache memory", "All of the above"],
        correct: 1
    },
    {
        question: "Which of the following is a function of an operating system?",
        options: ["File management", "Process management", "Memory management", "All of the above"],
        correct: 3
    },
    {
        question: "Which generation of computers is associated with the use of Integrated Circuits (ICs)?",
        options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
        correct: 2
    },
    {
        question: "Which of the following programming languages is closest to machine language?",
        options: ["C", "Java", "Assembly language", "Python"],
        correct: 2
    },
    {
        question: "Which of the following is used to store large amounts of data permanently?",
        options: ["Cache memory", "ROM", "Hard disk", "RAM"],
        correct: 2
    },
    {
        question: "What does the term 'BIOS' stand for?",
        options: ["Basic Integrated Operating System", "Binary Input Output System", "Basic Input Output System", "Binary Integrated Operating System"],
        correct: 2
    },
    {
        question: "Which of the following is an example of a computer peripheral?",
        options: ["Monitor", "Printer", "Keyboard", "All of the above"],
        correct: 3
    },
    {
        question: "The first computer virus was created in which year?",
        options: ["1985", "1986", "1990", "1992"],
        correct: 1
    },
    {
        question: "What does the 'GUI' stand for in computing?",
        options: ["Graphical Unifying Interface", "Graphical User Interface", "General User Interface", "General Unifying Interface"],
        correct: 1
    },
    {
        question: "Which of the following devices can perform both input and output operations?",
        options: ["Keyboard", "Printer", "Touchscreen", "Mouse"],
        correct: 2
    },
    {
        question: "What is the smallest size of a memory unit?",
        options: ["Byte", "Kilobyte", "Megabyte", "Gigabyte"],
        correct: 0
    },
    {
        question: "Which programming language was developed by Bjarne Stroustrup?",
        options: ["Java", "C", "C++", "Python"],
        correct: 2
    }
];

const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const correctAnswer = document.querySelector('#correct-answer');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitBtn = document.querySelector("#submit");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");

let currentQuiz = 0;
let score = 0;
let answered = false;

// Step 3: Load quiz function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerHTML = `Score: ${score}/${quizData.length}`;

    option_1.innerText = options[0];
    option_2.innerText = options[1];
    option_3.innerText = options[2];
    option_4.innerText = options[3];

    // Hide correct answer initially
    correctAnswer.innerText = "";
    answered = false;

    // Show or hide navigation buttons based on quiz progress
    if (currentQuiz === 0) {
        backBtn.style.display = "none";  // Hide back button on the first question
    } else {
        backBtn.style.display = "inline-block";  // Show back button on other questions
    }

    if (currentQuiz === quizData.length - 1) {
        nextBtn.style.display = "none";  // Hide next button on the last question
    } else {
        nextBtn.style.display = "inline-block";  // Show next button on other questions
    }
};

// Step 4: Get selected answer function
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

// Step 5: Deselect answers
const deselectedAnswer = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

// Step 6: Show correct answer function
const showCorrectAnswer = () => {
    const correctOption = quizData[currentQuiz].options[quizData[currentQuiz].correct];
    correctAnswer.innerText = `Correct answer is: ${correctOption}`;
};

// Step 7: Submit button click event
submitBtn.addEventListener("click", () => {
    const selectOptionIndex = getSelectedOption();
    if (selectOptionIndex !== -1) {
        if (selectOptionIndex === quizData[currentQuiz].correct) {
            score += 1;
        }
        answered = true;
        showCorrectAnswer();
        submitBtn.disabled = true; // Disable submit button after answering
    }
});

// Next button click event
nextBtn.addEventListener("click", () => {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        deselectedAnswer();
        loadQuiz();
        submitBtn.disabled = false;  // Enable submit button for the next question
    }
});

// Back button click event
backBtn.addEventListener("click", () => {
    if (currentQuiz > 0) {
        currentQuiz--;
        deselectedAnswer();
        loadQuiz();
        submitBtn.disabled = false;  // Enable submit button for the previous question
    }
});

// Initial load of quiz
loadQuiz();
