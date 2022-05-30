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

resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.web_assets.id
  policy = data.aws_iam_policy_document.allow_public_s3_access.json
}

data "aws_iam_policy_document" "allow_public_s3_access" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.web_assets.arn}/*",
    ]
  }
}