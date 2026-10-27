import os
import zipfile
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
EXCLUDE_DIRS = {'node_modules', '.git', '.vite', 'dist', '__pycache__', '.playwright-cli'}
EXCLUDE_EXTS = {'.zip', '.pyc'}

def create_source_zip():
    zip_path = os.path.join(ROOT_DIR, 'garnish-botanico-codigo-fuente.zip')
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(ROOT_DIR):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                if any(file.endswith(ext) for ext in EXCLUDE_EXTS):
                    continue
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, ROOT_DIR)
                zipf.write(file_path, rel_path)
    print(f"Source ZIP created: {zip_path} ({os.path.getsize(zip_path) / (1024*1024):.2f} MB)")
    # Copiar a public/
    public_copy = os.path.join(ROOT_DIR, 'public', 'garnish-botanico-codigo-fuente.zip')
    shutil.copy2(zip_path, public_copy)

def create_dist_zip():
    dist_dir = os.path.join(ROOT_DIR, 'dist')
    zip_path = os.path.join(ROOT_DIR, 'garnish-botanico-dist-produccion.zip')
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(dist_dir):
            for file in files:
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, ROOT_DIR)
                zipf.write(file_path, rel_path)
    print(f"Dist ZIP created: {zip_path} ({os.path.getsize(zip_path) / (1024*1024):.2f} MB)")
    # Copiar a public/
    public_copy = os.path.join(ROOT_DIR, 'public', 'garnish-botanico-dist-produccion.zip')
    shutil.copy2(zip_path, public_copy)

if __name__ == '__main__':
    create_source_zip()
    create_dist_zip()
