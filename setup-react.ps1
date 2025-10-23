# CryptoGazer React Migration Setup Script
# Run this script in PowerShell to complete the migration

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CryptoGazer - React Migration Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-Not (Test-Path "package-react.json")) {
    Write-Host "ERROR: package-react.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the CryptoGazer-main directory" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Backing up old files..." -ForegroundColor Yellow

# Backup old package.json if it exists
if (Test-Path "package.json") {
    Write-Host "  - Backing up old package.json to package-nextjs-backup.json" -ForegroundColor Gray
    Copy-Item "package.json" "package-nextjs-backup.json" -Force
}

# Backup old src folder if it exists
if (Test-Path "src") {
    Write-Host "  - Backing up old src folder to src-nextjs-backup" -ForegroundColor Gray
    if (Test-Path "src-nextjs-backup") {
        Remove-Item -Path "src-nextjs-backup" -Recurse -Force
    }
    Copy-Item -Path "src" -Destination "src-nextjs-backup" -Recurse -Force
}

Write-Host "Step 2: Replacing package.json..." -ForegroundColor Yellow
Remove-Item "package.json" -Force -ErrorAction SilentlyContinue
Rename-Item "package-react.json" "package.json"
Write-Host "  - package.json updated!" -ForegroundColor Green

Write-Host "Step 3: Replacing source files..." -ForegroundColor Yellow

# Remove old Next.js files
if (Test-Path "src") {
    Remove-Item -Path "src" -Recurse -Force
    Write-Host "  - Removed old Next.js src folder" -ForegroundColor Gray
}

if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force
    Write-Host "  - Removed .next build folder" -ForegroundColor Gray
}

# Move react-src to src
if (Test-Path "react-src") {
    Rename-Item -Path "react-src" -NewName "src"
    Write-Host "  - React source files moved to src/" -ForegroundColor Green
} else {
    Write-Host "  ERROR: react-src folder not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Step 4: Installing dependencies..." -ForegroundColor Yellow
Write-Host "  This may take a few minutes..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✅ Migration Complete!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your CryptoGazer app is now running React + Bootstrap!" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Run: npm start" -ForegroundColor White
    Write-Host "  2. Open: http://localhost:3000" -ForegroundColor White
    Write-Host "  3. Read: README-REACT.md for documentation" -ForegroundColor White
    Write-Host ""
    Write-Host "Old files backed up as:" -ForegroundColor Gray
    Write-Host "  - package-nextjs-backup.json" -ForegroundColor Gray
    Write-Host "  - src-nextjs-backup/" -ForegroundColor Gray
    Write-Host ""
    
    # Ask if user wants to start the app
    $start = Read-Host "Would you like to start the development server now? (y/n)"
    if ($start -eq 'y' -or $start -eq 'Y') {
        Write-Host ""
        Write-Host "Starting development server..." -ForegroundColor Cyan
        npm start
    }
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ Installation Failed" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check the error messages above and try:" -ForegroundColor Yellow
    Write-Host "  1. Delete node_modules folder" -ForegroundColor White
    Write-Host "  2. Delete package-lock.json" -ForegroundColor White
    Write-Host "  3. Run: npm install" -ForegroundColor White
    Write-Host ""
}
