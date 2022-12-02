<img src="https://holori.com/wp-content/uploads/2021/05/GCP.png" height=40px></img>

## Google Cloud Tipps & Tricks

---

## GCloud Storage

Upload many files to google storage from local computer: 
```bash
gsutil -m cp -r -Z ./dataset_imgs gs://explainable-face-verification.appspot.com/
```
---

## GCloud Run Flask App

You need two files within Flask App Environment:
### app.yaml
```yaml
# app.yaml
runtime: python39
entrypoint: gunicorn --limit-request-line 8190 -b :$PORT main:app
```

(gunicorn is needed to extend the request character limit from 4096 to more! Request message was too long)

### cloudbuild.yaml:
```yaml
# cloudbuild.yaml
steps:
- name: "gcr.io/cloud-builders/gcloud"
  args: ["app", "deploy"]
timeout: "1600s"
```

Sync and Clone Repo to cloud-shell instance then deploy app within the folder

```bash
gcloud app deploy
```

## Access to GCloud

via ssh:
```bash
gcloud cloud-shell ssh
```

## Update Code in GCloud via ssh

cd into Repo in GCloud
```bash
git fetch --all
git reset --hard origin/main
```
