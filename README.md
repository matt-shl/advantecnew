# Advantec CMS

This repository contains an upgraded Umbraco 15 project combined with a Next.js frontend.

## Requirements
- .NET 9 SDK
- Node.js 20

## Development

```bash
# restore and run Umbraco
DOTNET_ROOT=/usr/share/dotnet9 dotnet9 restore
DOTNET_ROOT=/usr/share/dotnet9 dotnet9 run --project Advantec.Cms
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

### Missing binary assets

Binary files like favicons and local NuGet packages are excluded from the
repository. To run the site locally or in the pipeline you need to restore them
manually:

1. Copy your `favicon.ico` into `Advantec.Cms/wwwroot/` and `frontend/src/app/`.
2. Download the packages from your Azure Artifacts feed and place them under
   `azure-artifacts/DTNL-Dotnet-Feed`.

The `nuget.config` file includes this directory as a package source so local
restores work even without network access. When the pipeline can reach the
Azure Artifacts feed it will prefer the remote source.
