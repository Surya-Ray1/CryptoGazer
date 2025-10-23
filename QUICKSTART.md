# 🚀 QUICK START - CryptoGazer React Version

## ⚡ Fastest Way to Get Started

### Option 1: Automated Setup (EASIEST!)

1. Open **PowerShell** in the project folder
2. Run this single command:

```powershell
.\setup-react.ps1
```

That's it! The script will:
- ✅ Backup your old files
- ✅ Replace package.json
- ✅ Move React source files
- ✅ Install all dependencies
- ✅ Optionally start the server

---

### Option 2: Manual Setup (3 Minutes)

Open PowerShell in `c:\xampp\htdocs\CryptoGazer-main\` and run these commands:

```powershell
# 1. Replace package.json
Remove-Item package.json
Rename-Item package-react.json package.json

# 2. Replace source files
Remove-Item -Path "src" -Recurse -Force
Rename-Item -Path "react-src" -NewName "src"

# 3. Install dependencies
npm install

# 4. Start the app
npm start
```

---

## 🎯 What You'll Get

✅ **React 18** - Modern React with hooks
✅ **Bootstrap 5** - Familiar responsive CSS framework  
✅ **React Bootstrap** - Pre-built React components
✅ **React Router** - Client-side navigation
✅ **All Features** - Portfolio, DEX, Gas Tracker, etc.

---

## 📱 Features Included

🏠 **Dashboard**
- Real-time market stats
- Portfolio overview
- Top cryptocurrencies
- Interactive charts

📊 **DEX Analytics**
- Multi-DEX price tracking
- Favorites (up to 6 pairs)
- Liquidity analysis

⛽ **Gas Tracker**
- Multi-chain support (ETH, Polygon, BSC, Arbitrum)
- Real-time gas prices
- Cost calculator

🔄 **Token Comparison**
- Compare up to 5 tokens
- Side-by-side metrics

💼 **Portfolio**
- Add transactions
- Track performance
- Multi-chain support

---

## 🌐 Access Your App

Once running, open your browser to:
```
http://localhost:3000
```

---

## 📚 Learn More

- **Full Documentation**: See `README-REACT.md`
- **Migration Details**: See `MIGRATION_GUIDE.md`
- **Bootstrap Guide**: https://getbootstrap.com/
- **React Guide**: https://react.dev/

---

## 🆘 Need Help?

### Port Already in Use?
```powershell
# Use a different port
$env:PORT=3001; npm start
```

### Installation Issues?
```powershell
# Clean install
Remove-Item -Path "node_modules" -Recurse -Force
Remove-Item package-lock.json
npm install
```

### Can't Run PowerShell Script?
```powershell
# Enable script execution (run once)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🎓 You Know React & Bootstrap? Perfect!

This project uses:
- ✅ Standard React components
- ✅ React hooks (useState, useEffect)
- ✅ Bootstrap classes you know
- ✅ React Bootstrap components
- ✅ React Router for navigation

No TypeScript, no Tailwind, no Next.js - just **React + Bootstrap**! 🎉

---

## 📝 Quick Commands

| Command | What it does |
|---------|--------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

---

**Ready? Just run:** `.\setup-react.ps1` **or follow manual steps above!** 🚀
