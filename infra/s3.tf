# Stores public assets
resource "aws_s3_bucket" "web_assets" {
  bucket = "${var.project}-web-assets-bucket"
}

resource "aws_s3_bucket_versioning" "web_assets_versioning" {
  bucket = aws_s3_bucket.web_assets.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_acl" "web_assets_acl" {
  bucket = aws_s3_bucket.web_assets.id
  acl    = "public-read"
}